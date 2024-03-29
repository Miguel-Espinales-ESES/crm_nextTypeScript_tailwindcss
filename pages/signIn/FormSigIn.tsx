import React from 'react'
// type props
import { Props, typeForm } from './Types'

// => imput
import InputItem, { TypeInput } from '../../components/InputItem'
// icon 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons'

// Formik
import { useFormik, FormikProps } from "formik";

// componets
import Button, { validateStatus as validateStatusButton } from '../../components/Button'

const FormSigIn: React.FC<Props> = () => {


    const formik: FormikProps<typeForm> = useFormik<typeForm>({
        initialValues: {
            nombre: 'nombre',
            apellido: '',
            email: '',
            password: ''
        },
        onSubmit: (values) => {
            console.log('values formik: ' ,values)
        }
    });

    return (
        <form onSubmit={formik.handleSubmit} className="form-control">
            <div className="grid grid-flow-row grid-rows-1 gap-4 md:grid-flow-col md:grid-rows-2">
                <InputItem
                    value={formik.values.nombre}
                    idInputItem='nombre'
                    Icon={<FontAwesomeIcon icon={faUser} />}
                    label='Nombre'
                    placeholder='Nombre del Usuario'
                    type={TypeInput.Text}
                    onChangeInput={formik.handleChange}
                />
                <InputItem
                    value={formik.values.email}
                    idInputItem='email'
                    Icon={<FontAwesomeIcon icon={faEnvelope} />}
                    label='Email'
                    placeholder='Emial@exmaple.com'
                    type={TypeInput.Email}
                    onChangeInput={formik.handleChange}
                />
                <InputItem
                    value={formik.values.apellido}
                    idInputItem='apellido'
                    Icon={<FontAwesomeIcon icon={faUser} />}
                    label='Apellido'
                    placeholder='Apellido del Usuario'
                    type={TypeInput.Text}
                    onChangeInput={formik.handleChange}
                />
                <InputItem
                    value={formik.values.password}
                    idInputItem='password'
                    Icon={<FontAwesomeIcon icon={faLock} />}
                    label='Password'
                    placeholder='Password User'
                    type={TypeInput.Password}
                    onChangeInput={formik.handleChange}
                />
            </div>

            <div className="items-center w-full card-actions">
                <Button
                    type='submit'
                    shape='circle'
                    className='w-full'
                    validateStatus={validateStatusButton.btn_primary}
                >
                    Crear Cuenta
                </Button>
            </div>

        </form>
    )
}

export default FormSigIn