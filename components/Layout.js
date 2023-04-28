import Head from 'next/head'
import React from 'react'
import Sidebar from './Sidebar'

export default function Layout({children, page}) {
    return (
        <>
            <Head>
                <title>Café - {page}</title>
                <meta name='description' content='Cafeteria hecha con React/NextJs/Prisma/Mysql' />
            </Head>

            <div className=' md:flex'>
                {/* xl:w-1/4 xl:w-3/4 2xl:w-4/5 2xl:w-1/5*/}
                <aside className=' md:w-3/12  '> 
                    <Sidebar />
                </aside>
                
                <main className=' md:w-9/12 h-screen overflow-y-scroll'>
                    <div className='p-10'>
                        {children}
                    </div>
                </main>
            </div>

        </>
    )
}
