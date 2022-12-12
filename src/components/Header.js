import React from 'react';

//import components
import Logo from '../assets/img/logo.svg';
import Nav from './Nav';

//import react-icons
import { HiMenu } from 'react-icons/hi'


const Header = () => {
  return (
    <header className='py-6'>
      <div className='container mx-auto'>
        <div>
          {/*logo*/}
          <a href='#'><img src={Logo} alt='' /></a>
        </div>
      </div>
    </header>
  )
}

export default Header