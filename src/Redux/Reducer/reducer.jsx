const myCart = [];

const cartHandler =(state= myCart,action)=>{
    const item = action.payload;

    switch(action.type){
        case "ADDTOCART":
            const itemExist = state.find((element)=>element.id === item.id);
                            
            if(itemExist){
                return state.map((element)=>element.id === item.id  ?
                {
                    ...element,
                    quantity: element.quantity + 1,
                    // TotalPrice: element.price * (element.quantity+1),  
                    TotalPrice: element.Price * (element.quantity+1),         
                }
                
                :
                        element
                )
               
            }
            else {
                const element = action.payload;
                return [
                    ...state,
                    {
                        ...element,
                        quantity:1,
                        Price: element.price
                         
                    }
                ]
            }
        break;

        case "REMOVEFROMCART":
                const itemExistForDeletion = state.find((element)=>element.id === item.id);
                // console.log("I exist")
                if(itemExistForDeletion){
                    // console.log("item deleted");
                    return state.filter((element)=>element.id !== item.id)
                }
                else if(itemExistForDeletion.quantity === 1){
                    return state.filter((element)=>element.id !== item.id);
                }
                else {
                    return state.map((element)=>element.id === item.id  ?
                    {
                        ...element,
                        quantity: element.qty - 1
                    }
                    :   element
                    )
                }
        break;
        
        case "INCREASEQUANTITY":
            // const qtyDEC = state.find((element)=>element.id === item.id);
            // if(qtyDEC){
                return state.map((element)=>element.id === item.id  ?
                    {
                        ...element,
                        quantity: element.quantity + 1,
                        // TotalPrice:(element.Price * (element.quantity+1)).toFixed(2),
                        TotalPrice: (element.Price * (element.quantity+1)).toFixed(2), 
                       
                    }
                        : element
                )
            
        break;

        case "DECREASEQUANTITY":
            // const qtyDEC = state.find((element)=>element.id === item.id);
            // if(qtyDEC){
                return state.map((element)=>element.id === item.id  ?
                    element.quantity >0 ?
                    {
                        ...element,
                        quantity: element.quantity - 1,
                        TotalPrice:(element.price * (element.quantity-1)).toFixed(2)
                        // TotalPrice:(100 * (element.quantity-1)).toFixed(2)
                    }
                    :{
                        ...element,
                        quantity: 0, 
                    } : element
                    )
            
        break;

        default:
            return state;
        break;
    }
}
export default cartHandler;