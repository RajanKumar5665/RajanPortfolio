import React from 'react'
import logo from "../assets/raviKumarLogo.webp"

import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <a href="/" aria-label='Home'>
             <img src={logo} className='mx-2' width={50} height={33} alt='Logo'/>
            </a>
        </div>
        <div className='m-8 flex item-center justify-center gap-4 text-2xl'>
             
             <a href="https://www.linkedin.com/in/your-linkedin-profile"
             target='blank'
             rel='noopener noreferrer'
             aria-label='LinkedIn'
             >
              <FaLinkedin />
              </a>
         
            <a href="https://www.twitter.com/in/your-twitter-profile"
             target='blank'
             rel='noopener noreferrer'
             aria-label='Twitter'>
              <FaSquareXTwitter /> 
            </a>

            <a href="https://www.instagram.com/in/your-instagram-profile"
             target='blank'
             rel='noopener noreferrer'
             aria-label='Instagram'>
            <FaSquareInstagram />
            </a>

            <a href="https://www.github.com/in/your-github-profile"
             target='blank'
             rel='noopener noreferrer'
             aria-label='Github'>
            <FaGithub />
            </a>
         
          
           
        </div>
    </nav>
  )
}

export default Navbar
