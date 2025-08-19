import React from 'react';
import Navbar from '../navbar/Navbar';
import Me from '../../assets/me.png'; 

function Hero() {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] flex flex-col items-center">
      <div className="md:h-[720px] h-[990px]   w-full bg-gradient-to-r from-blue-500 to-blue-900 absolute rounded-full transform rotate-6 -top-40 left-0 right-0 z-0">
        </div>
        <Navbar />
        <section id="home" className="flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-52 pb-4 md:pt-32 pt-24 md:pb-24 mt-24 md:mt-0 z-10">
          <div data-aos='fade-up' className='fles-1 md:text-left mt-10 md:mt-0'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4'>Sohel Matubber</h1>
            <p data-aos='fade-up' data-aos-delay='300' className='text-base sm:text-lg md:text-lg text-gray-300 mb-6'>Explore my projects, skills, and experiences.</p>
            <button className='bg-white text-blue-900 font-semibold rounded-full px-6 py-3 hover:bg-blue-300 transition duration-300'>
              Get Started
            </button>

          </div>
          <div data-aos='fade-up' className='flex-1 flex justify-center md:justify-center mt-0 md:mt-0'>
            <img src={Me} alt="Me" className='h-[300px] sm:h-[400px] md:h-[440px] w-[250px] sm:w-[360px] object-contain rounded-b-lg' />

          </div>
        </section>
    </div>
  );
}

export default Hero;
