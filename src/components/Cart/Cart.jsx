import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props;
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
        // if(product.quantity === 0){
        //     product.quantity = 1;
        // }
        // product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price + product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity +product.quantity;
    }
    const tax = totalPrice*7/100;
    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='cart'>
            <h4 style={{textAlign:'center',fontSize:'25px',color:'black', backgroundColor:'green',padding:'10px',borderRadius:'10px'}}>Order Summary</h4>
            <h4>Selected Items: {quantity}</h4>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;