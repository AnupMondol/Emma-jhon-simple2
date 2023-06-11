import React from 'react';
import './Nav.css';

const Nav = () => {
    return (
        <nav>
            <div className='nav-ancore'>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage Inventory</a>
            </div>
        </nav>
    );
};

export default Nav;