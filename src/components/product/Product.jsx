import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    // console.log(props)
    const {img,name,seller,price,stock} = props.product;
    return (
        <div className='container'>

            <div className="image-container">
                <img src={img} alt="" />
            </div>

            <div className="product-detail">
                <h4 className='product-name'>{name}</h4>
                <h5>by : {seller}</h5>
                <p>${price}</p>
                <p>Only <b>{stock}</b> left in stock - order soon</p>
                <button onClick={() => props.handelAddProduct(props.product)} className='add-button'><FontAwesomeIcon icon={faCartShopping} /> add to cart</button>
            </div>
           

        </div>
    );
};

export default Product;