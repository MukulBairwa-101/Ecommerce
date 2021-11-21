import React from 'react'
import {FiShoppingCart} from "react-icons/fi";
import {HiUserCircle} from "react-icons/hi"
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux';
import shopmart from "../../assets/images/shopmart.png";
import "../../styles/navigation.css";
const Navbar = () => {
    const state = useSelector((state)=>state.cartHandler) 
    return (
        <div className="navigation">
            <div><h4><img src={shopmart}alt="shopmart" /></h4></div>
            <div className="navigation_links">
                <ul>
                    <li><Link to ="/">Shop</Link></li>
                    <li> <Link to ="/products">Products</Link> </li>
                    <li><Link to ="/cart"><FiShoppingCart /> <span>{state.length}</span></Link></li>
                </ul>
            </div>
            <div>
                {/* <h4><HiUserCircle />Login</h4> */}
            </div>
        </div>
    )
}

export default Navbar;
