import React from 'react';
import logo from '../assets/logo.png'
 
const Header = () => {
    return (
        <div className='flex flex-col gap-3 justify-center items-center'>
            <img className='w-[350px]' src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
        </div>
    );
};

export default Header;