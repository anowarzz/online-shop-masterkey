import React from 'react';
import Main from '../../Layout/Main';
import MainHero from './MainHero';

const HeroSection = () => {
    return (
        <div className='grid grid-cols-5 mt-8'>
            <div className='border shadow-lg col-span-3'>
            <MainHero />
            </div>

            <div className='col-span-2'>
<p>Side card</p>
            </div>
        </div>
    );
};

export default HeroSection;