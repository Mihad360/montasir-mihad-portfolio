import React from 'react';
import Projects from '../components/projectpages/Projects';

export const metadata = {
    title: "Mihad Portfolio | Projects",
    description: "Montasir Mihad Portfolio",
  };

const page = () => {
    return (
        <div className='max-w-7xl mx-auto pt-28'>
            <div>
                <Projects></Projects>
            </div>
        </div>
    );
};

export default page;