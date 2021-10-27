import React from 'react'
import {FiShoppingCart} from "react-icons/fi";
import {HiUserCircle} from "react-icons/hi"
const Navbar = () => {
    return (
        <div className="navigation">
            <div><h4>Shopmart</h4></div>
            <div className="navigation_links">
                <ul>
                    <li>Shop</li>
                    <li>Products</li>
                    <li><FiShoppingCart />Cart (0)</li>
                </ul>
            </div>
            <div>
                <h4><HiUserCircle />Login</h4>
            </div>
        </div>
    )
}

export default Navbar;
