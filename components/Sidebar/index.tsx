import React from 'react';
import { useRouter } from 'next/router'
// componets
import ContendSidebar from './ContendSIdebar'

type Props = {}

const Sidebar: React.FC<Props> = () => {

    // routing de next
    const router = useRouter()

    return (
        <>
            <aside className='hidden p-5 lg:block bg-base-content md:h-full'>
                <span className='text-2xl font-black text-white'>CRM Clientes</span>
                <ContendSidebar />
            </aside>
            {/* // Responsive Sidebar  */}
            <aside className='block h-full lg:hidden bg-base-content'>
                <div tabIndex={0} className="text-white bg-base-content collapse collapse-arrow">
                    <input type="checkbox" />
                    <div className="text-xl font-medium collapse-title">
                        <span className='text-2xl font-black text-white'>CRM Clientes</span>
                    </div>
                    <div className="overflow-auto collapse-content">
                        <ContendSidebar />
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Sidebar