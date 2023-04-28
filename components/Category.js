import useStore from "@/hooks/useStore"
import Image from "next/image"

export default function Category({item}) {
    const {name, icon, id} = item
    const {handleClickCategory, categorySelected} = useStore()
    return (
        <div className={`flex items-center gap-2 w-full border p-3 hover:bg-amber-400 rounded
        ${categorySelected?.id === id ? 'bg-amber-400' : ''}`}>
            <Image className="" width={70} height={70} alt={`image ${name}`} src={`/assets/img/icono_${icon}.svg`}/>

            <button type="button" className=" text-2xl font-bold hover:cursor-pointer " 
            onClick={() => handleClickCategory(id)}>
                {name}
            </button>
        </div>
    )
}
