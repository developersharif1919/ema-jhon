import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    useEffect(()=>{
        const storedCart = getShoppingCart();
        const savedCart = [];
        // Step 1
        for(const id in storedCart){
            // Step 2: Get the product by using id
            const addedProduct = products.find(product => product.id === id);
            // Step 3: Get Quantity of the product
            const quantity = storedCart[id];
            if (addedProduct) { // null check
                addedProduct.quantity = quantity
                // Step 4: add the added product to the saved cart 
                savedCart.push(addedProduct);
            }
        }
        // Step 5: Set the cart
        setCart(savedCart);
    },[products]);
    const handleAddToCart = (product) =>{
        // cart.push(product)
        let newCart = [];
        // const newCart = [...cart, product];
        // if product doesn't exist in the cart, then set quantity = 1
        // if exist update quantity by 1
        const exist = cart.find(pd => pd.id === product.id);
        if(!exist){
            product.quantity = 1;
             newCart = [...cart,product]
        }else{
            exist.quantity = exist.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining,exist];
        }
        setCart(newCart)
        addToDb(product.id)
    }
    return (
        <div style={{color:'red'}} className='shop-container'>
            <div className="product-container">
                  {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart = {handleAddToCart}></Product>)
                  }
            </div>
            <div style={{color:'black'}} className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;