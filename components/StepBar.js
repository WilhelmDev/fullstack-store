import { useRouter } from "next/router"

const steps = [
    {step: 1, name: 'Menú', url: '/'},
    {step: 2, name: 'Resumen', url: '/resume'},
    {step: 3, name: 'Datos y total', url: '/total'},
]
export default function StepBar() {
    const router = useRouter()
    const calcProgress = () => {
        let porcent
        if (router.pathname === '/') {
            porcent = 2
        } else if(router.pathname === '/resume'){
            porcent = 50
        }
        else{
            porcent = 100
        }
        return `${porcent}%` 
    }
    return (
        <>
            <div className=" flex justify-between mb-2">
                {steps.map( (item) => (
                    <button className=" text-2xl font-bold "
                    key={item.step} onClick={() => {
                        router.push(item.url)
                        }}>
                        {item.name} 
                    </button>
                ))}
            </div>
            <div className=" mb-5">
                <div className="rounded-full bg-amber-400 text-xs leading-none h-2 text-center text-white w-10"
                style={{width: calcProgress()}}></div>
            </div>
        </>
    )
}
