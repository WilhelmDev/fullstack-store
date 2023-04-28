import axios from "axios";
import { useState, useEffect, createContext } from "react";

const StoreContext = createContext()

const StoreProvider = ({children}) => {
    const [categorys, setCategorys] = useState([])
    const [categorySelected, setCategorySelected] = useState({})
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
    return(
        <StoreContext.Provider value={{ categorys, handleClickCategory, categorySelected }}>
            {children}
        </StoreContext.Provider>
    )
}

export {StoreProvider}

export default StoreContext