import React from 'react';
import Slider from '../component/Slider';
import PopularSection from '../component/PopularSection';
import OurVets from '../component/OurVets';
import WinterCareTips from '../component/WinterCareTips';

const Home = () => {
    return (
        <div>
            <title>Home</title>
            <Slider/>
            <PopularSection></PopularSection>
            <OurVets></OurVets>
            <WinterCareTips></WinterCareTips>
        </div>
    );
};

export default Home;