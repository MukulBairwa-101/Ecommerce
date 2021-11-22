import React,{useState} from 'react'

const Billing = (props) => {
    // const [goods, setGoods] = useState(props.totalgoods);
    return (
        <div>
            <header>Order Summary</header>
            <h4>Total Products : {props.total[0]} </h4>
            <h4>Grand Total : $ {props.total[1]} </h4>
        </div>
    )
}

export default Billing;
