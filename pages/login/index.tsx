import type { NextPage } from 'next'

// components
import Card from '../../components/Card'
// => imput
import InputItem, { TypeInput, validateStatus } from '../../components/InputItem'
import Button, { validateStatus as validateStatusButton } from '../../components/Button'

// icon 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'


const Login: NextPage = () => {
    return (
        <>
            <div className='flex justify-center mt-5'>
                <div className='w-full max-w-sm'>
                    <Card
                        title={<h1 className='text-2xl font-bold text-center text-base-content'>Login</h1>}
                        className='bg-white shadow-2xl'
                    >
                        <div className='text-base-content'>
                            <form className="form-control">
                                <InputItem
                                    Icon={<FontAwesomeIcon icon={faEnvelope} />}
                                    label='Email'
                                    placeholder='Emial@exmaple.com'
                                    type={TypeInput.Email}
                                />
                                <InputItem
                                    Icon={<FontAwesomeIcon icon={faLock} />}
                                   //  validateStatus={validateStatus.input_primary}
                                    label='Password'
                                    placeholder='Password User'
                                    type={TypeInput.Text}
                                // errorInput={{
                                //     active: true,
                                //     error: 'fdsafa'
                                // }}
                                />
                            </form>
                        </div>
                        <div className="items-center w-full card-actions">
                            <Button
                                shape='circle'
                                className='w-full'
                                validateStatus={validateStatusButton.btn_primary}
                            >
                                Iniciar Sesión
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Login