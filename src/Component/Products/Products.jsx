import React,{useEffect, useState} from 'react'
import "../../styles/productcard.css"
import "../../styles/Common.css";
import {Link} from "react-router-dom";
const Products = () => {
    const[products,setProducts] = useState([]);
    const[filter,setFilter] = useState(products);
    const[loading,setLoading] = useState(false);
    let componentMounted = true;
    
    useEffect(() => {
       const getProducts = async ()=>{
           setLoading(true);
           const responseData  = await fetch(`https://fakestoreapi.com/products`);
        //    console.log(responseData,"api fetched");
           if(componentMounted){
               setProducts( await responseData.clone().json());
               setFilter( await responseData.json());
               setLoading(false);
           }
           return()=> {
               componentMounted = false;
            }
       }
       getProducts();
    }, [])

    const setFilterData =(category)=>{
        const updatedProductdata = products.filter((el)=>el.category === category)
        setFilter(updatedProductdata);
    }

    const Loading =()=>{
        return(
            <>
                    Loading...
            </>
        )
    }
    const ProductsVisible =()=>{
        return(
            <>
            <div className="tabs">
                   <ul>
                       <li> <button onClick ={()=>setFilter(products)}>All Products</button> </li>
                       <li> <button onClick ={()=>setFilterData("women's clothing")}>Women's clothing</button> </li>
                       <li> <button onClick ={()=>setFilterData("men's clothing")}>Men's clothing</button> </li>
                       <li> <button  onClick ={()=>setFilterData("electronics")}>Eloctronic Products</button> </li>
                   </ul>
            </div>
            <div className="product_card_wrapper">
            {
                filter.map((product)=>{
                    return(
                    <div className="product_card">
                        <img src={product.image} alt={product.title} />
                        <h4>{product.title}</h4>
                        
                            <p>$ {product.price}</p>
                            <Link to ={`/products/${product.id}`}>Explore</Link>
                    </div>
                    )
                    
                })
            }
            </div>
           
            </>
        )
    }

    return (
        <div className ="products_wrapper">
            <div className="header">
                <h4>Latest Products</h4>
            </div>
            <div>
            {loading ? <Loading /> : <ProductsVisible />}
            </div>
        </div>
    )
}

export default Products;
