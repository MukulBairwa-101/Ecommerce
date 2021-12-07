import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { removeFromCart } from "../../Redux/Action/action";
import { decreaseQuantity } from '../../Redux/Action/action';
import { increaseQuantity } from '../../Redux/Action/action';
import Billing from './Billing';
import Emptycart from '../Common/Emptycart';
import "../../styles/cartitems.css";
const Cart = () => {
    const [totalProducts,setTotalProducts] = useState(0);
    const [amount,setAmount] = useState(0.00);

    const state = useSelector((state)=>state.cartHandler);
    useEffect(() => {
        SETBILL();
    }, [state])
    const dispatch = useDispatch();
    const handleRemoveFromCart =(el)=>{
        dispatch(removeFromCart(el));
    }
    const substractQuantity =(el,state)=>{
        dispatch(decreaseQuantity(el));
    }
    const addQuantity =(el)=>{
        dispatch(increaseQuantity(el));
    }
    const SETBILL =()=>{
        let totalItems = 0;
        let payable  = 0.0;
        state.length === 0 ?Default()
        :
        state.map((el)=>{
            totalItems+=el.quantity;
            if(el.quantity===1){
                payable += parseFloat(el.Price);
            }
            else 
            {
                payable += parseFloat(el.TotalPrice);
            }
            
            // payable += parseFloat(el.TotalPrice);
           setTotalProducts(totalItems)
           setAmount(payable.toFixed(2));
        })
    }
    const Default = ()=>{
        setAmount(0.0);
        setTotalProducts(0);
    }
    return (
        <div className="cart_holder">
            <div className="cart_item_container"> 
            {state.length===0 ? <Emptycart /> : 
            
                state.map((el)=>{
                    return (
                       
                            <div className="cart_item" >
                                <div className="cart_image_c">
                                    <img src={el.image} alt={el.title} />
                                </div>
                                <div className="cart-text">
                                    <div className="text">
                                        <h5>{el.title}</h5>
                                        {/* <p>{el.category}</p> */}
                                        <p> quantity : <span> {el.quantity}</span></p>
                                        <p> $ {el.Price}  each</p>
                                        {/* <h2> Total Price is ${el.TotalPrice}</h2> */}
                                        
                                    
                                    </div>
                                    <div className="qty-btns">
                                        <button onClick={()=>substractQuantity(el)}  >-</button>
                                        <button onClick={()=>addQuantity(el)} >+</button>
                                        <button onClick={()=>handleRemoveFromCart(el)}>DEL</button>
                                    </div>
                                    <div className="price_tag">
                                    Price 
                                    <h2>   $ { el.quantity === 1 ? el.Price : el.TotalPrice}</h2>
                                    </div>
                                </div>
                               
                            </div>
                       
                    )
                })                
            }
             </div>
            
            <Billing total = {[totalProducts,amount]}  />
        </div>
    )
}

export default Cart;
