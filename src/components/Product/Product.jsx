import React from 'react';
import './Product.css'
const Product = (props) => {
    const { img, name, ratings, seller, quantity, price } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p className='product-price'>Price:${price}</p>
                <p className='product-seller'>Manufacturer:{seller}</p>
                <p className='product-rating'>Ratting: {ratings} Starts</p>
            </div>
            <button className='button-cart'>Add To Cart</button>
        </div>
    );
};

export default Product;