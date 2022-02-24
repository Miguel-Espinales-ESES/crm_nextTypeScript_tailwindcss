import React from 'react';
import { useRouter } from 'next/router'
// componets
import ContendSidebar from './ContendSIdebar'
import HomeButton from './HomeButton'
import NavItem from './NavItem'

// icon 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

type Props = {}

const Sidebar: React.FC<Props> = () => {

    // routing de next
    const router = useRouter()

    return (
        <>
            <aside className='hidden h-full lg:block bg-base-content'>
                <div className='flex items-center justify-center h-20'>
                    <HomeButton />
                </div>
                <div className='px-5 md:h-full'>
                    <ContendSidebar />
                </div>
            </aside>
            {/* // Responsive Sidebar  */}
            <aside className='block h-full lg:hidden bg-base-content'>
                <div tabIndex={0} className="text-white bg-base-content collapse collapse-arrow">
                    <input type="checkbox" />
                    <div className="text-xl font-medium collapse-title">
                        <span className='text-2xl font-black text-white'>CRM Clientes</span>
                    </div>
                    <div className="overflow-auto list-none collapse-content">
                        <NavItem
                            key={0}
                            url='/'
                            label='Inicio'
                            active={(router.pathname === '/') ? true : false}
                            Icon={<FontAwesomeIcon icon={faHome} />}
                        />
                        <ContendSidebar />
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Sidebar