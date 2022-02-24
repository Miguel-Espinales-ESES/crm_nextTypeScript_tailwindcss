import React from 'react';
import { useRouter } from 'next/router'
// componets
import NavItem from './NavItem'
// icon 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup, faShoppingCart, faBoxesStacked } from '@fortawesome/free-solid-svg-icons'

const ContendSidebar = () => {
    // routing de next
    const router = useRouter()
    const ListNavItem = [
        <NavItem
            key={0}
            url='/clientes'
            label='Clientes'
            active={(router.pathname === '/clientes') ? true : false}
            Icon={<FontAwesomeIcon icon={faUserGroup} />}
        />,
        <NavItem
            key={1}
            url='/pedidos'
            label='Pedidos'
            active={(router.pathname === '/pedidos') ? true : false}
            Icon={<FontAwesomeIcon icon={faShoppingCart} />}
        />,
        <NavItem
            key={2}
            url='/productos'
            label='Productos'
            active={(router.pathname === '/productos') ? true : false}
            Icon={<FontAwesomeIcon icon={faBoxesStacked} />}
        />
    ]

    return (
        <nav className={`list-none ${ListNavItem.length >= 8 ? 'h-[40vh]' : ''} `}>
            {ListNavItem.map((Item) => Item)}
        </nav>
    )
}

export default ContendSidebar