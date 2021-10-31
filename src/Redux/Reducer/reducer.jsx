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
                    quantity: element.qty + 1
                }
                :   element
                )
            }
            else {
                const item = action.payload;
                return [
                    ...state,
                    {
                        ...item,
                        quantity:1
                    }
                ]
            }
        break;

        case "REMOVEFROMCART":
                const itemExistForDeletion = state.find((element)=>element.id === item.id);
                if(itemExistForDeletion.qty===1){
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
        default:
            return state;
            break;
    }
}
export default cartHandler;