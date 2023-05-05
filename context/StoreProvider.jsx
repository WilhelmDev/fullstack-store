import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect, createContext } from "react";
import { toast } from "react-toastify";

const StoreContext = createContext()

const StoreProvider = ({children}) => {
    const [categorys, setCategorys] = useState([])
    const [categorySelected, setCategorySelected] = useState({})
    const [product, setProduct] = useState({})
    const [modal, setModal] = useState(false)
    const [order, setOrder] = useState([])
    const [step, setStep] = useState(1)
    const [name, setName] = useState('')
    const [total, setTotal] = useState(0)

    const router = useRouter()
    const getCategorys = async () => {
        const {data} = await axios('/api/categorys')
        setCategorys(data)
    }
    useEffect(() => {
        getCategorys()
    },[])
    useEffect(() => {
        setCategorySelected(categorys[0])
    }, [categorys])
    useEffect(() => {
        const newTotal = order.reduce((total, product) => (product.price * product.quantity) + total, 0)
        setTotal(newTotal)
    }, [order])
    
    const handleClickCategory = (id) => {
        const category = categorys.filter((cat) => cat.id === id)
        setCategorySelected(category[0])
        router.push('/')
    }
    const handleSetProduct = (item) => {
        setProduct(item)
    }
    const handleChangeModal = () => {
        setModal(!modal)
    }
    const handleAddOrder = ({categoryId, ...orderItem}) => {
        // if item already exist
        if (order.some((item) => item.id === orderItem.id)) {
            // upadte quantity
            const orderUpdated = order.map((item) => item.id === orderItem.id ? orderItem : item)
            setOrder(orderUpdated)
            toast.success('Actualizado correctamente')
        } else {
            // othercase add to order
            setOrder([...order, orderItem])
            toast.success('Agregado al Pedido')
        }
        setModal(false)    
    }
    const handleChangeStep = (stepSelected) => {
        setStep(stepSelected)
    }
    const handleChangeQuantity = (id) => {
        const productUpadated = order.filter( item => id === item.id)
        setProduct(productUpadated[0])
        setModal(!modal)
    }
    const handleDeleteProduct = (id) => {
        const orderUpdated = order.filter( item => id !== item.id)
        setOrder(orderUpdated)
        toast.info('Eliminado correctamente', {autoClose: 2000})
    }
    const sendOrder = async (e) => {
        e.preventDefault()
        try {
            await axios.post('/api/orders', {order, name, total, date : Date.now().toString()})
            // Reset app
            setCategorySelected(categorys[0])
            setOrder([])
            setName('')
            setTotal(0)

            toast.success('Pedido Realizado', {autoClose: 2000})
            setTimeout(() => {
                router.push('/')
            }, 2000);
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <StoreContext.Provider 
        value={{ categorys, handleClickCategory, categorySelected, handleSetProduct, product, handleChangeModal, modal, 
        handleAddOrder, order, step, handleChangeStep, handleChangeQuantity, handleDeleteProduct, name, setName, sendOrder, total}}>
            {children}
        </StoreContext.Provider>
    )
}

export {StoreProvider}

export default StoreContext