import axios from "axios";
import { useState, useEffect, createContext } from "react";

const StoreContext = createContext()

const StoreProvider = ({children}) => {
    const [categorys, setCategorys] = useState([])
    const [categorySelected, setCategorySelected] = useState({})
    const [product, setProduct] = useState({})
    const [modal, setModal] = useState(false)

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
    return(
        <StoreContext.Provider 
        value={{ categorys, handleClickCategory, categorySelected, handleSetProduct, product, handleChangeModal, modal}}>
            {children}
        </StoreContext.Provider>
    )
}

export {StoreProvider}

export default StoreContext