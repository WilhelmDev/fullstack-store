import { moneyFormatter } from '@/helpers'
import useStore from '@/hooks/useStore'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function Modalproduct() {
    const [quantity, setQuantity] = useState(1)
    const {product, handleChangeModal, handleAddOrder, order} = useStore()
    const {image, name, price} = product
    const [isInOrder, setIsInOrder] = useState(false)
    // if exist in the order update the quantity in hot
    useEffect(() => {
        if (order.some((item) => item.id === product.id)) {
            setIsInOrder(true)
            const productInOrder = order.find(item => item.id === product.id)
            setQuantity(productInOrder.quantity)
        }
    
    
    }, [order, product])
    
    return (
        <div className="md:flex md:flex-row text-center flex flex-col">
            <div className=' md:w-1/3 flex-row-reverse'>
                <Image  width={300} height={400} src={`/assets/img/${image}.jpg`} alt={`image ${name}`}/>
            </div>

            <div className=' md:w-2/3'>
                <div className='md:flex md:justify-end'>
                    <button onClick={() => handleChangeModal()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <h1 className='text-3xl font-bold mt-3 '>{name}</h1>
                <p className=' mt-5 font-black text-5xl text-amber-500'>{moneyFormatter(price)}</p>

                <div className='flex gap-4 mt-5 justify-center'>
                    <button type='buttton' onClick={() => {
                        if (quantity <= 1) return
                        setQuantity(quantity - 1)
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>

                    <p className=' text-3xl'>{quantity}</p> 

                    <button type='buttton' onClick={() => {
                        if (quantity >= 5) return
                        setQuantity(quantity + 1)
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                    </button>
                </div>
                <button type='button' className=' bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-4 rounded text-white font-bold uppercase'
                onClick={() => handleAddOrder({...product, quantity})}>
                    {isInOrder ? 'Actualizar pedido' : 'Agregar al Pedido' }
                    </button>
            </div>
        </div>
    )
}
