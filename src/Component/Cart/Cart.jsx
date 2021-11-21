import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { removeFromCart } from "../../Redux/Action/action";
import { decreaseQuantity } from '../../Redux/Action/action';
import { increaseQuantity } from '../../Redux/Action/action';
import Billing from './Billing';
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
        // SETBILL();
    }
    const addQuantity =(el)=>{
        dispatch(increaseQuantity(el));

        // SETBILL();
    }
    const SETBILL =()=>{
        let totalItems = 0;
        let payable  = 0.0;
        state.length === 0 ?Default()
        :
        state.map((el)=>{
            totalItems+=el.quantity;
            payable += parseFloat(el.TotalPrice);
            
           setTotalProducts(totalItems)
           setAmount(payable);
        })
    }
    const Default = ()=>{
        setAmount(0.0);
        setTotalProducts(0);
    }
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
            <Billing total = {[totalProducts,amount]} />
        </div>
    )
}

export default Cart;
