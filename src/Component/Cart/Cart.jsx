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
                                <img src={el.image} alt="ss" />
                            </div>
                        </>

                    )
                })                
            }
        </div>
    )
}

export default Cart;
