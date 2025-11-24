import React from 'react';
import Slider from '../component/Slider';
import PopularSection from '../component/PopularSection';
import OurVets from '../component/OurVets';


const Home = () => {
    return (
        <div>
            <title>Home</title>
            <Slider/>
            <PopularSection></PopularSection>
            <OurVets></OurVets>
           
        </div>
    );
};

export default Home;