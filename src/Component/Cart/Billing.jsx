import React,{useState} from 'react'
import {Link} from "react-router-dom";
const Billing = (props) => {
    // const [goods, setGoods] = useState(props.totalgoods);
    return (
        <div className="biil">
            <header>Order Summary</header>
            <h4>Total Products : {props.total[0]} </h4>
            <h4>Grand Total : $ {props.total[1]} </h4>
            <Link to ="/checkout">Checkout</Link>
        </div>
    )
}

export default Billing;
