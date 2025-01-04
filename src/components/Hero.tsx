import React from 'react'
import Navbar from './Navbar'

const Hero = () => {

  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/banner_bg.png)] bg-left lg:bg-[15%] bg-cover'
      style={{backgroundSize: "20%"}}
      >
      <Navbar   />

      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'> 
        <div className='hidden lg:block'></div>
        <div className='text-[60px] sm:text[70px] font-bold leading-tight flex justify-center items-center '>
          <div>

            <p data-aos="zoom-in">My</p>
            <p data-aos="zoom-in">Self is</p>
            <p data-aos="zoom-in">Qurat Khan</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

