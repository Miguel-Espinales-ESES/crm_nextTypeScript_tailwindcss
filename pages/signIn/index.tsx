import type { NextPage } from 'next'

// components
import Card from '../../components/Card'
import Button, { validateStatus as validateStatusButton } from '../../components/Button'
// => imput
import InputItem, { TypeInput } from '../../components/InputItem'

// icon 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons'

const SignIn: NextPage = () => {
    return (
        <>
            <div className='flex justify-center mt-5'>
                <div className='w-full max-w-sm md:max-w-md lg:max-w-lg'>
                    <Card
                        title={<h1 className='text-2xl font-bold text-center text-base-content'>sign In</h1>}
                        className='bg-white shadow-2xl'
                    >
                        <div className='text-base-content'>
                            <form className="form-control">
                                <div className="grid grid-flow-row grid-rows-1 gap-4 md:grid-flow-col md:grid-rows-2">
                                    <InputItem
                                        Icon={<FontAwesomeIcon icon={faUser} />}
                                        label='Nombre'
                                        placeholder='Nombre del Usuario'
                                        type={TypeInput.Text}
                                    />
                                    <InputItem
                                        Icon={<FontAwesomeIcon icon={faEnvelope} />}
                                        label='Email'
                                        placeholder='Emial@exmaple.com'
                                        type={TypeInput.Email}
                                    />
                                    <InputItem
                                        Icon={<FontAwesomeIcon icon={faUser} />}
                                        label='Apellido'
                                        placeholder='Apellido del Usuario'
                                        type={TypeInput.Text}
                                    />
                                    <InputItem
                                        Icon={<FontAwesomeIcon icon={faLock} />}
                                        label='Password'
                                        placeholder='Password User'
                                        type={TypeInput.Text}
                                    />
                                </div>
                            </form>
                        </div>

                        <div className="items-center w-full card-actions">
                            <Button
                                shape='circle'
                                className='w-full'
                                validateStatus={validateStatusButton.btn_primary}
                            >
                                Crear Cuenta
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default SignIn