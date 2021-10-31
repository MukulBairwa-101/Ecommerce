import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux';
import {addToCart} from "../../Redux/Action/action";
import { useParams } from 'react-router';
import Loader from '../Common/Loader';
import {Link} from "react-router-dom";
const Item = () => {
    const {id} = useParams();
    const[item,setItem] = useState([]);
    const[loading,setLoading]= useState(false);

    const dispatch = useDispatch();
    const handleAddToCart =(item)=>{
        dispatch(addToCart(item));
    }

    useEffect(()=>{
        const getItem =async ()=>{
            setLoading(true);
            const responseData = await fetch(`https://fakestoreapi.com/products/${id}`);
            setItem( await responseData.json());
            setLoading(false);

        }
        getItem();
        // console.log(item,"item is here")
    },[])

    const ItemDisplay =()=>{
        return (
            <>
                <div className="item_wrapper">
                    <div className="image_container">
                        <img src={item.image} alt={item.title} />
                    </div>
                    <div className="additional_info_container">
                        <p>{item.title}</p>
                        <h4>{item.category}</h4>
                        <span>$ {item.price}</span>
                        <p>{item.description}</p>
                        <div className="button_holder">
                            <button onClick ={()=>handleAddToCart(item)}>Add to cart</button>
                            <Link to ="/cart">My Cart</Link>
                        </div>
                    </div>
                </div>
                
            </>
        )
    }
    return (
        <div>
            {loading ? <Loader/> : <ItemDisplay />}
        </div>
    )
}

export default Item;
