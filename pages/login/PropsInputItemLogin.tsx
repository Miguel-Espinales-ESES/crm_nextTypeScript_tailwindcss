// => imput
import { TypeInput } from '../../components/InputItem'
// icon 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons'

const PropsInputItem = {
    email: {
        idInputItem: 'email',
        Icon: <FontAwesomeIcon icon={faEnvelope} />,
        label: 'Email',
        placeholder: 'Emial@exmaple.com',
        type: TypeInput.Email
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