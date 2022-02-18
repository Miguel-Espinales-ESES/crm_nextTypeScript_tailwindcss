import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
// type props
import { Props, typeForm } from './Types'
import schemaFormSignIn from './Types/schemaYup'
// Formik
import { useFormik, FormikProps } from "formik";
// componets
import Button, { validateStatus as validateStatusButton } from '../../components/Button'
// => imput
import InputItem from '../../components/InputItem'
// apollo client
import { useMutation } from '@apollo/client'
import { nuevoUsuarioMutation } from './Types/GQL'
// alert
import { toast } from 'react-toastify';
// utils
import HandleError from '../../utils/HandleError'
// props
import PropsInputItem from './PropsInputItem'

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
                        {...PropsInputItem.nombre}
                        value={formik.values.nombre}
                        disabled={loading || !!data}
                        onChangeInput={formik.handleChange}
                        onBlurInput={formik.handleBlur}
                        errorInput={{
                            active: !!formik.errors.nombre && !!formik.touched.nombre,
                            error: formik.errors.nombre
                        }}
                    />
                    <InputItem
                        {...PropsInputItem.email}
                        value={formik.values.email}
                        onChangeInput={formik.handleChange}
                        disabled={loading || !!data}
                        onBlurInput={formik.handleBlur}
                        errorInput={{
                            active: !!formik.errors.email && !!formik.touched.email,
                            error: formik.errors.email
                        }}
                    />
                    <InputItem
                        {...PropsInputItem.apellido}
                        value={formik.values.apellido}
                        disabled={loading || !!data}
                        onChangeInput={formik.handleChange}
                        onBlurInput={formik.handleBlur}
                        errorInput={{
                            active: !!formik.errors.apellido && !!formik.touched.apellido,
                            error: formik.errors.apellido
                        }}
                    />
                    <InputItem
                        {...PropsInputItem.password}
                        value={formik.values.password}
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