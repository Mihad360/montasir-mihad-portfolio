import React from 'react';
import Contactme from '../components/aboutpages/Contactme';
import AboutBanner from '../components/aboutpages/AboutBanner';
import AboutBannertwo from '../components/aboutpages/AboutBannertwo';
import Exp_skill from '../components/aboutpages/Exp_skill';

const page = () => {
    return (
        <div className='max-w-7xl mx-auto pt-24'>
            <div className='flex gap-5 border-b border-gray-400'>
                <AboutBanner></AboutBanner>
                <AboutBannertwo></AboutBannertwo>
            </div>
            <div>
                <Exp_skill></Exp_skill>
            </div>
            <div>
                <Contactme></Contactme>
            </div>
        </div>
    );
};

export default page;