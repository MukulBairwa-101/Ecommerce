import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {Link} from "react-router-dom";
import {handleCheckoutButton} from "../../Redux/Action/action" 
const Billing = (props) => {
    const state = useSelector((state)=>state.cartHandler) 
    const dispatch = useDispatch();
     const handleCheckout=(state)=>{
        dispatch(handleCheckoutButton(state));

     }
    return (
        <div className="biil summary">
            <header>Order Summary</header>
            <div>
                 <h4>Total Products  : </h4>  <h4> {props.total[0]}</h4>
            </div>

            <div>
                 <h4>Grand Total : </h4>  <h4> $ {props.total[1]}</h4>
            </div>
            
            <Link to ="/checkout"  onClick ={handleCheckout}>Checkout</Link>
        </div>
    )
}

export default Billing;
