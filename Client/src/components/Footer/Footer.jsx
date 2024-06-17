import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
       <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt='logo'/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In eius earum libero voluptate sed ipsam quam quasi deleniti laborum possimus quia ab ut, reprehenderit vel accusamus, neque ea aperiam debitis.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} />
                <img src={assets.twitter_icon}/>
                <img src={assets.linkedin_icon}/>
            </div>
        </div>
        <div className="footer-content-right">
             <h2>GET IN TOUCH</h2>
             <ul>
                <li>+91-768-396-6297</li>
                <li>ayushdwibedy123@gmail.com</li>
             </ul>
        </div>
        <div className="footer-content-center">
              <h2>COMPANY</h2>
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy </li>
              </ul>
        </div>
       </div>
       <hr />
       <p className='footer-copyright'>Copyright 2024 @ Tomato.com</p>
    </div>
  )
}

export default Footer