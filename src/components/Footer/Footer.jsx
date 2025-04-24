import './Footer.css';
import React from 'react';
import zomato from '../../utils/images/eato.webp';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { ImLinkedin2 } from 'react-icons/im';
import { TfiFacebook } from 'react-icons/tfi';
import { TbBrandGithub } from 'react-icons/tb';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer'>
                <a href='/'><img id='logo' src={zomato} alt="Zomato" loading='lazy' /></a>

                <div className='copyright'>
                    2025 © Eato Clone™<br />
                    created by <a href='https://www.linkedin.com/in/adinath-biradar-aa121b232/' target='_blank' id='creator'>Biradar Adi</a>
                </div>
                <div className='social-media'>
                    <a href='https://www.linkedin.com/in/adinath-biradar-aa121b232/' target='_blank'><ImLinkedin2 /></a>
                    <a href='https://github.com/AdinathBiradar01' target='_blank'><TbBrandGithub /></a>
                    <a href='https://x.com/Bir33035Adinath' target='_blank'><BsTwitter /></a>
                    <a href='(Add u r link)' target='_blank'><BsInstagram /></a>
                    <a href='https://www.facebook.com/profile.php?id=100087668821201' target='_blank'><TfiFacebook /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;
