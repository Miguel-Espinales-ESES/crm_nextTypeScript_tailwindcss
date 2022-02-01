import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router'

// components
import Sidebar from '../Sidebar'

// types
type Props = {}


const Layout: React.FC<Props> = ({ children }) => {

    const [activeLayout, setActiveLayout] = useState<boolean>()

    const contendType = {
        sidebar: ['/', '/pedidos', '/productos'],
        auth: ['/login']
    }

    // routing de next
    const router = useRouter()

    useEffect(() => {
        if (contendType.sidebar.includes(router.pathname)) {
            setActiveLayout(true)
        } else {
            setActiveLayout(false)
        }
    }, [router, contendType.sidebar])

    return (
        <>
            <Head>
                <title >CRM - Administración de Clientes</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </Head>

            {
                (activeLayout) ? (
                    <div className='grid h-full grid-cols-10 gap-4 bg-gray-200 md:min-h-screen'>
                        <div className='col-span-10 h-2/5 md:min-h-screen md:col-span-2'>
                            <Sidebar />
                        </div>
                        <div className='h-screen col-span-10 p-5 md:col-span-8'>
                            <main>
                                {children}
                            </main>
                        </div>
                    </div>
                ) : (
                    <div>
                        <p>activeLayout login</p>
                        <main>
                            {children}
                        </main>
                    </div>
                )
            }


        </>
    )
}

export default Layout