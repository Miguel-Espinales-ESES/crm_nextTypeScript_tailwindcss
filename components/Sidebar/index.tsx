import React from 'react';
import { useRouter } from 'next/router'

// componets
import NavItem from './NavItem'

type Props = {}

const Sidebar: React.FC<Props> = () => {

    // routing de next
    const router = useRouter()

    return (
        <aside className='p-5 bg-base-content md:h-full'>
            <div>
                <span className='text-2xl font-black text-white'>CRM Clientes</span>
            </div>
            <nav className='mt-5 list-none'>
                <NavItem
                    url='/'
                    label='Clientes'
                    active={(router.pathname === '/' ) ? true : false}
                />
                <NavItem
                    url='/pedidos'
                    label='Pedidos'
                    active={(router.pathname === '/pedidos' ) ? true : false}
                />
                 <NavItem
                    url='/productos'
                    label='Productos'
                    active={(router.pathname === '/productos' ) ? true : false}
                />
            </nav>
        </aside>
    )
}

export default Sidebar