import React from 'react';
import useTitle from './Hooks/useTitle';

const About = () => {
useTitle('about')

    return (
        <div>
            <h1>this is about</h1>
        </div>
    );
};

export default About;