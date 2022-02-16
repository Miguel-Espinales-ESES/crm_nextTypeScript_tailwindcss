import { gql } from '@apollo/client'

export const nuevoUsuarioMutation = gql`
    mutation nuevoUsuario($input: UsuarioInput!){
	nuevoUsuario(input: $input){
		id
		nombre
		apellido
		email
		creado
	}
}
`