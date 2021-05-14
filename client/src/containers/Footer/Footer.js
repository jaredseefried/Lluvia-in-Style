import React from 'react';
import Image from 'react-bootstrap/Image'
import './Footer.css'
import MileHighWebSolutions from '../../images/Mile-High-Web-Solutions-Logo-notext.png'
import { SiTiktok } from 'react-icons/si'
import { GrInstagram, GrFacebookOption } from 'react-icons/gr'

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#eee', paddingTop: '10px' }}>
      <h4 style={{ background: '#eee' }} className='text-center'>Lluvia in Style</h4>
      <div className="contact-info" style={{ lineHeight: '0.3', padding: '20px 0px' }}>
        <p className='text-center'>Owner: Nora Acosta</p>
        <p className='text-center'>Phone: 303-587-0671 </p>
        <p className='text-center'>Email: <a href="mailto:lluviainstyle@gmail.com">lluviainstyle@gmail.com</a></p>
      </div>
      <div className='text-center text-muted' style={{ background: '#eee' }}>Connect with Lluvia in Style on
      </div>
      <div className='icon-wrapper' style={{ background: '#eee' }}>
        <a href='https://www.facebook.com/lluviainstyle' target='_blank'>
          <GrFacebookOption className='social-icon' id='facebook-icon' />
        </a>
        <a href='https://www.instagram.com/jolett.12/' target='_blank'>
          <GrInstagram className='social-icon' id='instagram-icon' />
        </a>
        <a href='https://www.tiktok.com/@lluviainstyle?lang=en' target='_blank'>
          <SiTiktok className='social-icon' id='tiktok-icon' />
        </a>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '2%', backgroundColor: 'rgb(214 214 214)' }}>
        <p style={{ display: 'flex', alignItems: 'center' }}>website created by: </p>
        <a href='https://www.milehighwebsolutions.com' target='_blank'>
          <Image className='rounded mhws' src={MileHighWebSolutions} />
        </a>
        <a href='https://www.milehighwebsolutions.com' target='_blank'>
          <p className='mhws' >Mile High Web Solutions, LLC
            </p>
        </a>
      </div>
    </div >
  );
}

export default Footer;