import React from 'react';
import Banner from '../Pages/Banner';
import Courses from '../Pages/Courses';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <Courses></Courses>
        </div>
    );
};

export default Home;