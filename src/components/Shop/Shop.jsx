import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    const handleAddToCart = (product) =>{
        // cart.push(product)
        const newCart = [...cart, product];
        setCart(newCart)
    }
    return (
        <div style={{color:'red'}} className='shop-container'>
            <div className="product-container">
                  {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart = {handleAddToCart}></Product>)
                  }
            </div>
            <div style={{color:'black'}} className="cart-container">
                <h4>Order Summary</h4>
                <h4>Selected Items: {cart.length}</h4>
            </div>
        </div>
    );
};

export default Shop;