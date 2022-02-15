import * as yup from 'yup';

const schemaFormSignIn = yup.object({
    nombre: yup.string()
        .required('Inserte el nombre'),
    apellido: yup.string()
        .required('Inserte el apellido'),
    email: yup.string()
        .email('Ingrese un email valido')
        .required('Inserte un email valido'),
    password: yup.string()
        .required('Ingrese el password')
        .min(6, 'El password debe ser de al menos 6 caracteres')
})

export default schemaFormSignIn