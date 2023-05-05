import Layout from "@/components/Layout";
import ResumeProduct from "@/components/ResumeProduct";
import useStore from "@/hooks/useStore";

export default function Resume() {
    const {order} = useStore()
    return (
        <Layout page={'Resumen Del Pedido'}>
            <h1 className=" text-4xl font-black">Resumen De Su Pedido</h1>
            <p className="text-2xl my-10">Revisa tu Pedido</p>

            {order.length === 0 
            ? (<p className=" text-center text-2xl"> No hay elementos en su pedido </p>)
            : (
                order.map( (item) => (
                    <ResumeProduct key={item.id} item={item}/>
                ))
            )  }
        </Layout>
    )
}