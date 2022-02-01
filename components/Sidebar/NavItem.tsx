import React from 'react'
import Link from 'next/link'

type Props = {
    label?: string | React.ReactNode
    url: string
    active?: boolean
}

const NavItem: React.FC<Props> = ({label, url, active}) => {
    return(
        <li className={`${(active) ? 'p-2 bg-primary' : null}`}>
        <Link href={url}>
            <a className='block mb-2 text-white'>
                {label}
            </a>
        </Link>
    </li>
    )
}

export default NavItem