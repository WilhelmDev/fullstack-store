import { moneyFormatter } from '@/helpers'
import useStore from '@/hooks/useStore'
import Image from 'next/image'
import React from 'react'

export default function Product({item}) {
    const {handleSetProduct, product, handleChangeModal, modal} = useStore()
    const {name, price, image} = item
    return (
        <div className="border p-3">
            <Image src={`/assets/img/${image}.jpg`} alt={`image ${name}`} width={300} height={300}/>
            <div className="p-5">
                <h3 className="text-2xl font-bold">{name}</h3>
                <p className=' mt-5 font-black text-4xl text-amber-500'>{moneyFormatter(price)}</p>
            </div>
            <button onClick={() => {handleSetProduct(item); handleChangeModal()}} 
            type='button' className=' bg-indigo-600 rounded hover:bg-indigo-800 text-white w-full mt-3 p-3 uppercase font-bold'>
                Agregar
            </button>
        </div>
    )
}
