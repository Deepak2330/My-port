import React from 'react';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si'

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://github.com/Deepak2330' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

           
            <a href='https://www.linkedin.com/in/deepak-m-9370261b4/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>
           
            <a href='https://www.instagram.com/mr__deepak__m' className='home__social-link' target='_blank' rel='noreferrer'>
                 <FaInstagram />
                  </a>

            
        </div>
    );
};

export default HeaderSocials;
