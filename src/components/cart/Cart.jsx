import React from 'react';
import './cart.css';
const Cart = (props) => {

    const cart = props.cart;


    // const totalPrice = cart.reduce((total, prd) => total + prd.price , 0);

    let totalPrice = 0;

    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        totalPrice = totalPrice + product.price;
        
    }

    let shipping = 0;

    if(totalPrice > 35){
        shipping = 0;
    }else if(totalPrice > 15){
        shipping = 4.99;
    }else if(totalPrice > 0){
        shipping = 30;
    }

    const totalBeforeTax = totalPrice + shipping;

    const tax = totalPrice / 10;

    const total = totalPrice + shipping + tax;

    const formateNumber = num => {
        const precition = num.toFixed(2);
        return Number(precition);
    }
    
    
    return (

        

        <div>
            <h3>Order Summary</h3>
            <p>Itemes ordered : {cart.length}</p>
            <h5>Price : ${formateNumber(totalPrice)}</h5>
            <h5>Shiping Cost : ${formateNumber(shipping)}</h5>
            <h5>Total before tax : ${formateNumber(totalBeforeTax)}</h5>
            <h5>Estimated tax : ${formateNumber(tax)}</h5>
            <h4>Order Total : ${formateNumber(total)}</h4>
            <button className='add-button'> Review your order</button>
        </div>
    );
};

export default Cart;