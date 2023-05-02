import Head from 'next/head'
import React from 'react'
import Sidebar from './Sidebar'
import useStore from '@/hooks/useStore';
import Modal from 'react-modal'
import Modalproduct from './Modalproduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#__next');

export default function Layout({children, page}) {
    const {modal, handleChangeModal} = useStore()
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

            {modal && (
                <Modal isOpen={modal} style={customStyles}
                >
                    <Modalproduct />
                </Modal>
            )}

            <ToastContainer />
        </>
    )
}
