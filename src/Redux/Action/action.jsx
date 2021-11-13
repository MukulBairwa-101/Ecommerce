export const addToCart = (item)=>{
    return{
        type:"ADDTOCART",
        payload:item
    }
}

export const removeFromCart = (item)=>{
    return{
        type:"REMOVEFROMCART",
        payload:item
    }
}

export const decreaseQuantity = (item)=>{
    return{
        type:"DECREASEQUANTITY",
        payload:item
    }
}
export const increaseQuantity = (item)=>{
    return{
        type:"INCREASEQUANTITY",
        payload:item
    }
}

