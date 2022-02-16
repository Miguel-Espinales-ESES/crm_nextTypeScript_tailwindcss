import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
// type props
import { Props, typeForm } from './Types'
import schemaFormSignIn from './Types/schemaYup'
// icon 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons'
// Formik
import { useFormik, FormikProps } from "formik";
// componets
import Button, { validateStatus as validateStatusButton } from '../../components/Button'
// => imput
import InputItem, { TypeInput } from '../../components/InputItem'
// apollo client
import { useMutation } from '@apollo/client'
import { nuevoUsuarioMutation } from './Types/GQL'
// alert
import { toast } from 'react-toastify';
// utils
import HandleError from '../../utils/HandleError'

const FormSigIn: React.FC<Props> = () => {
    // grapql mutation
    const [fechCrearUsuario, { data, loading, error }] = useMutation(nuevoUsuarioMutation)
    const router = useRouter()

    const formik: FormikProps<typeForm> = useFormik<typeForm>({
        initialValues: {
            nombre: '',
            apellido: '',
            email: '',
            password: ''
        },
        validationSchema: schemaFormSignIn,
        onSubmit: (values) => {
            try {
                fechCrearUsuario({ variables: { 'input': { ...values } } })
            } catch (e) {
                toast.error(HandleError(e))
                console.log(e);
            }
        }
    });

 
    useEffect(() => {
        if (data) {
            toast.success("Usuario Creado!")
            setTimeout(() => {
                router.push('/login')
            }, 4000)
        }
        if (error) {
            toast.error(HandleError(error))
        }
    }, [data, error, router])


    return (
        <>
            <form onSubmit={formik.handleSubmit} className="form-control">
                <div className="grid grid-flow-row grid-rows-1 gap-4 md:grid-flow-col md:grid-rows-2">
                    <InputItem
                        value={formik.values.nombre}
                        idInputItem='nombre'
                        Icon={<FontAwesomeIcon icon={faUser} />}
                        label='Nombre'
                        placeholder='Nombre del Usuario'
                        type={TypeInput.Text}
                        disabled={loading || !!data}
                        onChangeInput={formik.handleChange}
                        onBlurInput={formik.handleBlur}
                        errorInput={{
                            active: !!formik.errors.nombre && !!formik.touched.nombre,
                            error: formik.errors.nombre
                        }}
                    />
                    <InputItem
                        value={formik.values.email}
                        idInputItem='email'
                        Icon={<FontAwesomeIcon icon={faEnvelope} />}
                        label='Email'
                        placeholder='Emial@exmaple.com'
                        type={TypeInput.Email}
                        onChangeInput={formik.handleChange}
                        disabled={loading || !!data}
                        onBlurInput={formik.handleBlur}
                        errorInput={{
                            active: !!formik.errors.email && !!formik.touched.email,
                            error: formik.errors.email
                        }}
                    />
                    <InputItem
                        value={formik.values.apellido}
                        idInputItem='apellido'
                        Icon={<FontAwesomeIcon icon={faUser} />}
                        label='Apellido'
                        placeholder='Apellido del Usuario'
                        type={TypeInput.Text}
                        disabled={loading || !!data}
                        onChangeInput={formik.handleChange}
                        onBlurInput={formik.handleBlur}
                        errorInput={{
                            active: !!formik.errors.apellido && !!formik.touched.apellido,
                            error: formik.errors.apellido
                        }}
                    />
                    <InputItem
                        value={formik.values.password}
                        idInputItem='password'
                        Icon={<FontAwesomeIcon icon={faLock} />}
                        label='Password'
                        placeholder='Password User'
                        type={TypeInput.Password}
                        disabled={loading || !!data}
                        onChangeInput={formik.handleChange}
                        onBlurInput={formik.handleBlur}
                        errorInput={{
                            active: !!formik.errors.password && !!formik.touched.password,
                            error: formik.errors.password
                        }}
                    />
                </div>

                <div className="items-center w-full card-actions">
                    <Button
                        type='submit'
                        shape='circle'
                        loading={loading}
                        disabled={loading || !!data}
                        className='w-full'
                        validateStatus={validateStatusButton.btn_primary}
                    >
                        Crear Cuenta
                    </Button>
                </div>
            </form>
        </>
    )
}

export default FormSigIn