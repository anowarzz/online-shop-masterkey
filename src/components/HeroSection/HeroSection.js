import React from 'react';
import Main from '../../Layout/Main';
import MainHero from './MainHero';

const HeroSection = () => {
    return (
        <div className='flex my-10'>
            <div className='shadow-md 5'>
            <MainHero />
            </div>

            <div className=' border'>
<p>Side card</p>
            </div>
        </div>
    );
};

export default HeroSection;