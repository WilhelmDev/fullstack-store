import useStore from "@/hooks/useStore";
import Image from "next/image";
import Category from "./Category";

export default function Sidebar() {
    const {categorys} = useStore()
    return (
        <>
            <Image width={120} height={150} src={'/assets/img/logo.svg'} alt="img logo" priority={true}
            className=" h-28  mx-auto w-full" />

            <nav className=" mt-10">
                {categorys.map( (item) => (
                    <Category item={item} key={item.id} />
                ))}
            </nav>
        </>
    )
}
