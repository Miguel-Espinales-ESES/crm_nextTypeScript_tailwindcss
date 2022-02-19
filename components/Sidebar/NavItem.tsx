import React, { cloneElement } from 'react'
import { useRouter } from 'next/router'
import { Props } from './Types'

const NavItem: React.FC<Props> = ({ label, url, active, Icon }) => {
    const router = useRouter()
    return (
        <li onClick={() => router.push(url)} className={`${(active) ? 'p-1 bg-primary' : 'hover:bg-primary-content hover:text-base-content'} cursor-pointer my-2 text-white transition duration-75 rounded text-ellipsis whitespace-nowrap`}>
            <div className='flex flex-row gap-2 py-2 transition duration-200 ease-out hover:ease-in'>
                <span className='ml-1'>
                    {
                        Icon && cloneElement(Icon as React.ReactElement<any>, { className: 'w-8' })
                    }
                </span>
                <a>{label}</a>
            </div>
        </li>
    )
}

export default NavItem