import React from 'react';
import { useRouter } from 'next/router'
// componets
import NavItem from './NavItem'
// icon 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup, faShoppingCart, faBoxesStacked } from '@fortawesome/free-solid-svg-icons'

type Props = {}

const Sidebar: React.FC<Props> = () => {

    // routing de next
    const router = useRouter()

    return (
        <aside className='p-5 bg-base-content md:h-full'>
            <span className='text-2xl font-black text-white'>CRM Clientes</span>
            <nav className='mt-5 list-none'>
                <NavItem
                    url='/'
                    label='Clientes'
                    active={(router.pathname === '/') ? true : false}
                    Icon={<FontAwesomeIcon icon={faUserGroup} />}
                />
                <NavItem
                    url='/pedidos'
                    label='Pedidos'
                    active={(router.pathname === '/pedidos') ? true : false}
                    Icon={<FontAwesomeIcon icon={faShoppingCart} />}
                />
                <NavItem
                    url='/productos'
                    label='Productos'
                    active={(router.pathname === '/productos') ? true : false}
                    Icon={<FontAwesomeIcon icon={faBoxesStacked} />}
                />
            </nav>
        </aside>
    )
}

export default Sidebar