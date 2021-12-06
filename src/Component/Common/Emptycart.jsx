import React from 'react'
import { Link } from 'react-router-dom';
import emptycart from "../../assets/images/emptycart.png";
const Emptycart = () => {
    return (
        <div className="emptycart_wrapper">
            <img src={emptycart} alt="emptycart" />
            <div>
            <span>Your cart is Empty</span>
            <Link to ="/" >Shop now</Link>
            </div>
            
        </div>
    )
}

export default Emptycart;
