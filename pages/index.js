import Layout from "@/components/Layout";
import Product from "@/components/Product";
import useStore from "@/hooks/useStore";

export default function Home() {
  const {categorySelected} = useStore()
  
  return (
    <Layout page={`Menu ${categorySelected?.name}`}>
      <h1 className=" text-4xl font-black">{categorySelected?.name}</h1>
      <p className=" text-2xl my-10">
        Elige y personaliza tu pedido a continuación
      </p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {categorySelected?.products?.map( (item) => (
          <Product item={item} key={item.id}/>
          ))}
      </div>

    </Layout>
  )
}
