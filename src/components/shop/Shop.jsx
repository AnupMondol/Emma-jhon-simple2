import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../product/Product';
import Cart from '../cart/cart';

const Shop = () => {

    // loading products froom fake data

    const firstTen = fakeData.slice(0,10);
    const [products, setProducts] = useState(firstTen);
    const [cart, setCart] = useState([]);


    // adding product

    

    const handelAddProduct = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }
    
    return (
        
        <div className='shop-container'>

            <div className='product-container'>
                {
                    products.map(pd => <Product handelAddProduct={handelAddProduct} product={pd} key={pd.key}></Product>)
                }
            </div>
                
            <div className='cart-container'>
                
                <Cart cart={cart}></Cart>

            </div>
            
        </div>
    );
};

export default Shop;