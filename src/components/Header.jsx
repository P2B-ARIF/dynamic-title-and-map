import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/order">Order</Link>
            <Link to="/about">About</Link>
            <Link to="/service">Services</Link>
        </div>
    );
};

export default Header;