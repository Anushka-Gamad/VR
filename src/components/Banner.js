import React from 'react';

//import components
import Users from './Users';


//import image
import Img from '../assets/img/banner-img.png';


const Banner = () => {
  return( 
  <section className='min-h-[600px] pt-24 pb-12 text-center relative lg:pt-48 lg:pb-0 lg:text-left'>
    <div className='container mx-auto'>
      <div>
        {/*text*/}
        <div>
          <h1>Let's Explore <br /> Three-Dimensional Visually.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        {/*btn*/}
        <div>
          <button>
            Get it Now.
          </button>
          <a href='#'>Explore Device</a>
        </div>
        {/*Image*/}
        <div>
          <img src={Img} alt=''/>
        </div>
      </div>
    </div>
  </section>
  )
};

export default Banner;
