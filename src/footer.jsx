import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { SiGlassdoor } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer>
        <p style={{marginLeft:"80px"}}> ⓒ2024 Leo Bobby | All rights reserved</p>
        
        <div className='social'>
            <p>
                Connect with us
            </p>
        <CiLinkedin className='linkedin' />
        <SiGlassdoor className='footer-icons' />
        <FaXTwitter className='footer-icons' />
        </div>
      </footer>
    </div>
  )
}

export default Footer;
