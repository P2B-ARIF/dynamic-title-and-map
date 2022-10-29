import React from 'react';
import useTitle from './Hooks/useTitle';

const Order = () => {
    useTitle('order')
    return (
        <div>
            <h1>this is order</h1>
        </div>
    );
};

export default Order;