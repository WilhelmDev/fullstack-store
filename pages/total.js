import Layout from "@/components/Layout";
import { moneyFormatter } from "@/helpers";
import useStore from "@/hooks/useStore";
import { useCallback, useEffect } from "react";

export default function Total() {
    const {order, name, setName, sendOrder, total} = useStore()

    const checkOrder = useCallback(() => {
        return order.length === 0 || name === '' || name.length < 3
    }, [order, name])
    
    useEffect(() => {
        checkOrder()
    }, [order, checkOrder])
    
    return (
        <Layout page={'Total y confirmar pedido'}>
            <h1 className=" text-4xl font-black">Total y Confirmar Pedido</h1>
            <p className="text-2xl my-10">Confirma tu pedido a continuacion</p>

            <form action="" onSubmit={sendOrder}>
                <div>
                    <label htmlFor="name" className=" block uppercase text-slate-800 font-bold text-xl">Nombre</label>
                    <input type="text" name="name" id="name" className=" bg-gray-200 w-full md:w-1/3 mt-3 p-2 rounded" 
                    value={name} onChange={(e) => setName(e.target.value)}/>
                </div>

                <div className=" mt-10">
                    <p className=" text-2xl">
                        Total a pagar {''} <span className=" font-bold">{moneyFormatter(total)}</span>
                    </p>
                </div>

                <div className="mt-5">
                    <input value={'Confirmar Pedido'} type="submit"
                    className={` ${checkOrder() ? 'bg-indigo-100' : 'bg-indigo-600 hover:cursor-pointer hover:bg-indigo-800'} 
                    w-full md:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center`}
                    disabled={checkOrder()}/>
                </div>
                </form>
        </Layout>
    )
}
