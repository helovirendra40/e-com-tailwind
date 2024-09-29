import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import ProductItem from "../components/ProductItem";

export const ShopContext = createContext();
const ShopContextProvider = (props)=>{
    const currency = "₹";
    const delivery_fee = 20;
    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});

    const addToCart = async(itemId, size)=>{
if(!size){
    toast.error('Select Size first')
    return;
}

        let cartData = structuredClone(cartItems);
        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] +=1;
            }
            else{
                cartData[itemId][size] = 1;
            }
        }
        else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData)
        toast.success('Product added your cart')
    }

    const getCartCount = ()=>{
        let totalCount = 0;
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item] > 0 ){
                        totalCount += cartItems[items][item];
                    }
                }
                catch(error){

                }
            }
        }
        return totalCount;
    }

    const updateQuantity = async (itemId, size, quantity)=>{
        let cartData = structuredClone(cartItems);

        cartData[itemId][size] = quantity;
        setCartItems(cartData)
    }

    const getCartAmount = ()=>{
        let totalAmount = 0;
        for(const items in cartItems){
            let cartInfo = products.find((product)=>product._id === items);
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item] > 0){
                        totalAmount += cartInfo.price * cartItems[items][item] 
                    }
                }
                catch{}
            }
        }
        return totalAmount;
    }
    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch, addToCart, cartItems, getCartCount, updateQuantity, getCartAmount
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;