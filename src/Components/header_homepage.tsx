import React from 'react';
import '../Styles/header_homepage.css';

const Header_homepage = () => {
  return(
    <div>
      <img src="/pictures/bg_1.jpeg" className='pic-bg1'/>
      <div className='title' >
        <img src="/icons/moon.png" className='moon-icon'/>
        <h1 className='title1'>
            Photography
        </h1>
        <h1 className='title2' >
            Portfolio
        </h1>
      </div>
      <div className='homepage-text'>
        <h2>
            DO SOMETHING TODAY THAT YOUR FUTURE SELF WILL THANK YOU FOR.
        </h2>
      </div>
      <div className='homepage-pic'>
        <img src="/pictures/homepage_pic.jpeg" className='homepage_pic'/>
      </div>
    </div> 
  )
}

export default Header_homepage;