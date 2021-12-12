import React from 'react'
import { useSelector } from 'react-redux';
import succes from "../../assets/images/succes.png";
const Checkout = () => {
    const state = useSelector((state)=>state.cartHandler) 
    return (
        <>
            <div className="checout_section">
                <img src={succes} alt="success" />
                <h3>Payment succesful</h3>
            </div>
        </>

    )
}

export default Checkout;
