import React from 'react';
import useTitle from './Hooks/useTitle';
import MyLocations from './Locations/MyLocations';

const Home = () => {
useTitle('home')

    return (
        <div>
            <h1>This Is MyLocation</h1>
            <div>
                <MyLocations/>
            </div>
        </div>
    );
};

export default Home;