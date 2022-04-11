import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({children})=>{

        const [myCart ,setMyCart] = useState([]);

        const addItem = (item)=>{

            setMyCart([...myCart, item]);
        }

        const removeItem = (id)=>{
            const newCollection = myCart.filter(item=>item.product.id!=id);
            setMyCart(newCollection);
        }

        const increaseItem = (id)=>{
            const updatesItems = myCart.map(item=>{
                if(item.product.id == id) item.count+=1;
            }) 
        }

        const reduceItem = (id)=>{
            const updatesItems = myCart.map(item=>{
                if(item.product.id == id) item.count-=1;
            }) 
        }


    return <AppContext.Provider value={{myCart, addItem,removeItem,reduceItem,increaseItem}}>{children}</AppContext.Provider>
}