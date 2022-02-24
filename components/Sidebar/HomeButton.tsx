import { useRouter } from 'next/router'

const HomeButton = () => {
    const router = useRouter()

    const onClickHome = () => {
        router.push('/')
    }
    return (
        <span onClick={() => onClickHome()} className='p-[19px] text-2xl font-black text-white transition duration-75 rounded cursor-pointer hover:bg-primary-content hover:text-base-content text-ellipsis whitespace-nowrap'>
            CRM Clientes
        </span>
    )
}


export default HomeButton