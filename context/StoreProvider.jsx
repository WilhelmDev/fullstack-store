import axios from "axios";
import { useState, useEffect, createContext } from "react";
import { toast } from "react-toastify";

const StoreContext = createContext()

const StoreProvider = ({children}) => {
    const [categorys, setCategorys] = useState([])
    const [categorySelected, setCategorySelected] = useState({})
    const [product, setProduct] = useState({})
    const [modal, setModal] = useState(false)
    const [order, setOrder] = useState([])

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
    const handleClickCategory = (id) => {
        const category = categorys.filter((cat) => cat.id === id)
        setCategorySelected(category[0])
    }
    const handleSetProduct = (item) => {
        setProduct(item)
    }
    const handleChangeModal = () => {
        setModal(!modal)
    }
    const handleAddOrder = ({categoryId, image , ...orderItem}) => {
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
        
    return(
        <StoreContext.Provider 
        value={{ categorys, handleClickCategory, categorySelected, handleSetProduct, product, handleChangeModal, modal, handleAddOrder, order}}>
            {children}
        </StoreContext.Provider>
    )
}

export {StoreProvider}

export default StoreContext