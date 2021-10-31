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