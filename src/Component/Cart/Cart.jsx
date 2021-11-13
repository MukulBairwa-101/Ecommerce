import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {removeFromCart} from "../../Redux/Action/action";
import { decreaseQuantity } from '../../Redux/Action/action';
import { increaseQuantity } from '../../Redux/Action/action';
import Billing from './Billing';
const Cart = () => {
    // const [totalProducts,setTotalProducts] = useState(0);
    const state = useSelector((state)=>state.cartHandler);
    const dispatch = useDispatch();
    const handleRemoveFromCart =(el)=>{
        dispatch(removeFromCart(el));
    }
    const substractQuantity =(el,state)=>{
        dispatch(decreaseQuantity(el));
        // SETBILL();
    }
    const addQuantity =(el)=>{
        dispatch(increaseQuantity(el));

        // SETBILL();
    }
    // const SETBILL =()=>{
    //     state.map((el)=>{
    //         let data =0;
    //         data+=el.quantity;
    //        setTotalProducts(data)
    //     })
    // }
    return (
        <div>
            {state.length===0 ? "empty cart" : 
            
                state.map((el)=>{
                    return (
                        < >
                            <div >
                                <div className="cart_image_c">
                                    <img src={el.image} style ={{width:"100px"}} alt={el.title} />
                                </div>
                                <div className="text">
                                    <h5>{el.title}</h5>
                                    <p>{el.category}</p>
                                    <span> quantity : {el.quantity}</span>
                                    <p> $ {el.Price}  each</p>
                                    {/* <h2> Total Price is ${el.TotalPrice}</h2> */}
                                    <h2>  Price is $ { el.quantity === 1 ? el.Price : el.TotalPrice}</h2>
                                   
                                </div>
                                <div className="qty-btns">
                                    <button onClick={()=>substractQuantity(el)}  >-</button>
                                    <button onClick={()=>addQuantity(el)} >+</button>
                                    <button onClick={()=>handleRemoveFromCart(el)}>DEL</button>
                                </div>
                            </div>
                        </>

                    )
                })                
            }
            <Billing  />
        </div>
    )
}

export default Cart;
