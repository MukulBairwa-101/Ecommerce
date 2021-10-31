import React from 'react'
import { useSelector } from 'react-redux';
const Cart = () => {
    const state = useSelector((state)=>state.cartHandler);

    return (
        <div>
            {state.length===0 ? "empty cart" : 
            
                state.map((el)=>{
                    return (
                        <>
                            <div>
                                <div className="cart_image_c">
                                    <img src={el.image} alt={el.title} />
                                </div>
                                <div className="text">
                                    <h5>{el.title}</h5>
                                    <p>{el.category}</p>
                                    <span></span>
                                </div>
                                <div className="qty-btns">
                                    <button>-</button>
                                    <button>+</button>
                                    <button>DEL</button>
                                </div>
                            </div>
                        </>

                    )
                })                
            }
        </div>
    )
}

export default Cart;
