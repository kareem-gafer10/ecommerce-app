import React from 'react';
// import images
import WomanImg from '../img/woman_hero.png';
// import link
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className=' h-[800px] bg-lightbrown py-24'>
    <div className="container mx-auto flex justify-around h-full">

    <div className='flex flex-col justify-center'>

      <div className='font-semibold flex items-center uppercase'>
            <span className='w-10 h-[2px] bg-red-500 mr-3'></span>
            <p>New Trend</p>
          </div>

        <h1 className='text-[70px] leading-[1.1] font-light mb-4'>
            AUTUMN SALE STYLISH <br />
          <span className='font-semibold'>WOMENS</span>
      </h1>

      <Link to={'/'}
      className=' self-start uppercase font-semibold border-b-2 border-primary'>
            Discover More
      </Link>  
    </div>


    <div className='hidden lg:block'>
        <img src={WomanImg} alt="WomanImg" />
    </div>


    </div>
    </section>
  );
};

export default Hero;
