import { moneyFormatter } from "@/helpers";
import useStore from "@/hooks/useStore";
import Image from "next/image";

export default function ResumeProduct({item}) {
    const {handleChangeQuantity, handleDeleteProduct} = useStore()
    const {name, price, image, quantity, id} = item
    return (
        <div className="p-5 shadow mb-3 flex gap-10 items-center">
            <div className=" md:w-1/6">
                <Image  width={300} height={400} alt={`item ${name}`} src={`/assets/img/${image}.jpg`} className="rounded"/>
            </div>
            <div className=" md:w-4/6">
                <p className=" text-3xl font-bold">{name}</p>
                <p className=" text-xl font-bold mt-2">Cantidad: {quantity}</p>
                <p className=" text-xl font-bold mt-2 text-amber-500">Precio: {moneyFormatter(price)}</p>
                <p className=" text-sm font-bold mt-2 text-gray-700">Subtotal: {moneyFormatter(price*quantity)}</p>
            </div>
            <div>
                <button onClick={() => handleChangeQuantity(id)}
                className=" bg-sky-700 flex gap-2 px-5 py-2 text-white rounded font-bold uppercase shadow w-full ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                    </svg>
                    Editar
                </button>
                <button onClick={() => handleDeleteProduct(id)}
                className=" bg-red-700 flex gap-2 px-5 py-2 text-white rounded font-bold uppercase shadow w-full mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
                    </svg>
                    Eliminar
                </button>
            </div>
        </div>
    )
}
