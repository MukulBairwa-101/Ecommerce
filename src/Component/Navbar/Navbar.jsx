import React from 'react'
import {FiShoppingCart} from "react-icons/fi";
import {HiUserCircle} from "react-icons/hi"
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux';
const Navbar = () => {
    const state = useSelector((state)=>state.cartHandler) 
    return (
        <div className="navigation">
            <div><h4>Shopmart</h4></div>
            <div className="navigation_links">
                <ul>
                    <li><Link to ="/">Shop</Link></li>
                    <li> <Link to ="/products">Products</Link> </li>
                    <li><Link to ="/cart"><FiShoppingCart />Cart {state.length}</Link></li>
                </ul>
            </div>
            <div>
                <h4><HiUserCircle />Login</h4>
            </div>
        </div>
    )
}

export default Navbar;
