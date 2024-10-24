import React from 'react';
import Contactme from '../components/contactmepages/Contactme';
import AboutBanner from '../components/aboutpages/AboutBanner';
import AboutBannertwo from '../components/aboutpages/AboutBannertwo';
import Exp_skill from '../components/aboutpages/Exp_skill';

export const metadata = {
    title: "Mihad Portfolio | About",
    description: "Montasir Mihad Portfolio",
  };

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
        </div>
    );
};

export default page;