import Layout from "@/components/Layout";
import useStore from "@/hooks/useStore";

export default function Home() {
  const {categorySelected} = useStore()
  return (
    <Layout page={`Menu ${categorySelected?.name}`}>
      <h1 className=" text-4xl font-black">{categorySelected?.name}</h1>
      <p className=" text-2xl my-10">
        Elige y personaliza tu pedido a continuación
      </p>
    </Layout>
  )
}
