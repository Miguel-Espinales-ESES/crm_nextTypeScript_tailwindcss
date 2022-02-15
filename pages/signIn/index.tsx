import type { NextPage } from 'next'

// components
import Card from '../../components/Card'
import FormSigIn from './FormSigIn'

const SignIn: NextPage = () => {
    return (
        <>
            <div className='flex justify-center mt-5'>
                <div className='w-full max-w-sm md:max-w-md lg:max-w-lg'>
                    <Card
                        title={<span className='text-2xl font-bold text-center text-base-content'>sign In</span>}
                        className='bg-white shadow-2xl'
                    >
                        <div className='text-base-content'>
                            <FormSigIn />
                        </div>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default SignIn