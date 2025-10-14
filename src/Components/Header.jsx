import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';

 
const Header = () => {
    return (
        <div className='py-6 flex flex-col gap-3 justify-center items-center'>
            <img className='w-[400px]' src={logo} alt="" />
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            <p className='text-accent font-medium'>{format(new Date() ,"EEEE, MMMM MM, yyyy")}</p>
        </div>
    );
};

export default Header;