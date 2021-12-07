import React,{useState} from 'react'
import {Link} from "react-router-dom";
 
const Billing = (props) => {
    // const [goods, setGoods] = useState(props.totalgoods);
    return (
        <div className="biil summary">
            <header>Order Summary</header>
            <div>
                 <h4>Total Products  : </h4>  <h4> {props.total[0]}</h4>
            </div>

            <div>
                 <h4>Grand Total : </h4>  <h4> $ {props.total[1]}</h4>
            </div>
            
            <Link to ="/checkout">Checkout</Link>
        </div>
    )
}

export default Billing;
