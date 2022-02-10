import type { NextPage } from 'next'

// components
import Card from '../../components/Card'
// => imput
import InputItem, { TypeInput, validateStatus } from '../../components/InputItem'


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
                                    label='Email'
                                    placeholder='Emial@exmaple.com'
                                    validateStatus={validateStatus.input_info}
                                    type={TypeInput.Email}
                                />
                                 <InputItem
                                    label='Password'
                                    placeholder='Password User'
                                    type={TypeInput.Text}
                                />
                            </form>
                        </div>
                        <div className="items-center w-full card-actions">
                            <button className="w-full btn btn-primary">Iniciar Sesión</button>
                        </div>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Login