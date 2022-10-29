import React from 'react';
import useTitle from './Hooks/useTitle';

const Services = () => {
    useTitle('service')
    return (
        <div>
            <h1>this is service</h1>
        </div>
    );
};

export default Services;