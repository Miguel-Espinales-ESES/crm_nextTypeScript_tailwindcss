// => imput
import { TypeInput } from '../../components/InputItem'
// icon 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons'

const PropsInputItem = {
    nombre: {
        idInputItem: 'nombre',
        Icon: <FontAwesomeIcon icon={faUser} />,
        label: 'Nombre',
        placeholder: 'Nombre del Usuario',
        type: TypeInput.Text
    },
    email: {
        idInputItem: 'email',
        Icon: <FontAwesomeIcon icon={faEnvelope} />,
        label: 'Email',
        placeholder: 'Emial@exmaple.com',
        type: TypeInput.Email
    },
    apellido: {
        idInputItem: 'apellido',
        Icon: <FontAwesomeIcon icon={faUser} />,
        label: 'Apellido',
        placeholder: 'Apellido del Usuario',
        type: TypeInput.Text
    },
    password: {
        idInputItem: 'password',
        Icon: <FontAwesomeIcon icon={faLock} />,
        label: 'Password',
        placeholder: 'Password User',
        type: TypeInput.Password
    }
}

export default PropsInputItem