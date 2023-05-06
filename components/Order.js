import { moneyFormatter } from "@/helpers"
import axios from "axios"
import Image from "next/image"
import { toast } from "react-toastify"

export default function Order({orderItem}) {
    const {id, name, order, total } = orderItem
    const completeOrder = async () => {
        try {
            await axios.post(`/api/orders/${id}`, )
            toast.success('Pedido Completado', {autoClose:1200})
        } catch (error) {
            toast.error('Hubo un error', {autoClose:1200})
        }
    }
    
    return (
        <>
            <div className='border shadow p-10 space-y-5 rounded mb-2'>
                <h3 className=" text-2xl font-bold">Orden: {id}</h3>
                <p className="text-lg my-10 font-bold">Cliente: {name}</p>

                <div>
                    {order.map( (item) => (
                        <div key={item.id} className="py-3 flex border-b last-of-type:border-0 items-center">
                            <div className="w-32">
                                <Image width={400} height={500} src={`/assets/img/${item.image}.jpg`} alt={`img ${item.name}`} className="rounded"/>
                            </div>

                            <div className="p-5 space-y-2">
                                <h4 className="text-xl font-bold text-amber-500">{item.name}</h4>
                                <p>Cantidad: {item.quantity}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="md:flex md:items-center md:justify-between my-10">
                    <p className="mt-5 font-black text-3xl text-amber-500">
                        Total a pagar: {moneyFormatter(total)}
                    </p>

                    <button type="button" onClick={completeOrder}
                    className=" bg-indigo-600 hover:bg-indigo-800 text-white mt-5 py-2 px-8 uppercase font-bold rounded">
                        Completar Pedido
                    </button>
                </div>
            </div>
        </>
    )
}