import type { NextPage } from 'next'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

// type props
import { Props, typeForm, REQUES_LOGIN } from './Types'
import schemaFormLogin from './Types/schemaYupLogin'
import PropsInputItem from './PropsInputItemLogin'

// components
import Card from '../../components/Card'
// => imput
import InputItem from '../../components/InputItem'
import Button, { validateStatus as validateStatusButton } from '../../components/Button'

// Formik
import { useFormik, FormikProps } from "formik";

// Apollo Cleint 
import { AUTENTICAR_USUARIO } from './Types/GQL_Login'
import { useMutation } from '@apollo/client'

// alert
import { toast } from 'react-toastify';

// utils
import HandleError from '../../utils/HandleError'

const Login: NextPage<Props> = () => {

    const [fechAutenticarUsuario, { data, loading, error }] = useMutation<REQUES_LOGIN>(AUTENTICAR_USUARIO)
    const router = useRouter()

    const formik: FormikProps<typeForm> = useFormik<typeForm>({
        initialValues: {
            password: '',
            email: ''
        },
        validationSchema: schemaFormLogin,
        onSubmit: (values) => {
            try {
                fechAutenticarUsuario({ variables: { 'input': { ...values } } })
            } catch (e) {
                console.log(e);
            }
        }
    })

    useEffect(() => {
        if (data) {
            // guardar token en local storage
            localStorage.setItem('token', data.autenticarUsuario.toToken)
            // redireccionar hacia Clientes
            router.push('/')
        }
        if (error) {
            toast.error(HandleError(error))
        }
    }, [data, error, router])

    return (
        <div className='flex justify-center mt-5'>
            <div className='w-full max-w-sm'>
                <Card
                    title={<span className='text-2xl font-bold text-center text-base-content'>Login</span>}
                    className='bg-white shadow-2xl'
                >
                    <div className='text-base-content'>
                        <form onSubmit={formik.handleSubmit} className="form-control">
                            <InputItem
                                {...PropsInputItem.email}
                                value={formik.values.email}
                                disabled={loading || !!data}
                                onBlurInput={formik.handleBlur}
                                onChangeInput={formik.handleChange}
                                errorInput={{
                                    active: !!formik.errors.email && !!formik.touched.email,
                                    error: formik.errors.email
                                }}
                            />
                            <InputItem
                                {...PropsInputItem.password}
                                value={formik.values.password}
                                disabled={loading || !!data}
                                onBlurInput={formik.handleBlur}
                                onChangeInput={formik.handleChange}
                                errorInput={{
                                    active: !!formik.errors.password && !!formik.touched.password,
                                    error: formik.errors.password
                                }}
                            />
                            <div className="items-center w-full card-actions">
                                <Button
                                    type='submit'
                                    shape='circle'
                                    className='w-full'
                                    validateStatus={validateStatusButton.btn_primary}
                                    loading={loading}
                                    disabled={loading || !!data}
                                >
                                    Iniciar Sesión
                                </Button>
                            </div>
                        </form>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Login