import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    const { img, name, ratings, seller, quantity, price } = props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p className='product-price'>Price:${price}</p>
                <p className='product-seller'>Manufacturer:{seller}</p>
                <p className='product-rating'>Ratting: {ratings} Starts</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='button-cart'>
                Add To Cart <FontAwesomeIcon icon={faShoppingCart} />
                </button>
        </div>
    );
};

export default Product;