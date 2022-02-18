import * as yup from 'yup';

const schemaFormSignIn = yup.object({
    email: yup.string()
        .email('Ingrese un email valido')
        .required('Inserte un email valido'),
    password: yup.string()
        .required('Ingrese el password')
})

export default schemaFormSignIn