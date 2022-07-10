import React from 'react'
import '../footer/footer.css'
import gp3Logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='barry__footer section__padding'>
      <div className='barry__footer-heading'>
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
      </div>
      <div className='barry__footer-btn'>
        <p>Request Early Access</p>
      </div>

      <div className='barry__footer-links'>
        <div className='barry__footer-links_logo'>
          <img src={gp3Logo} alt="logo" />
          <p>Block 4B, House 1, Barry Estate, All Rights Reserved</p>
        </div>

        <div className='barry__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counter</p>
          <p>Contact</p>
        </div>

        <div className='barry__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>

        <div className='barry__footer-links_div'>
          <h4>Get in touch</h4>
          <p>Block 4B, House 1, Barry Estate, Lagos State, Nigeria.</p>
          <p>+234-8089470944</p>
          <p>abiodunhodonu@gmail.com</p>
        </div>
      </div>
      <div className='barry__footer-copyright'>
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
