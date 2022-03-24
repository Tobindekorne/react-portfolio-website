import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaGitlab } from 'react-icons/fa';

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a
                href='https://www.linkedin.com/in/tobin-dekorne/'
                rel='noreferrer'
                target='_blank'
            >
                <BsLinkedin />
            </a>
            <a
                href='https://github.com/Tobindekorne/'
                rel='noreferrer'
                target='_blank'
            >
                <FaGithub />
            </a>
            <a
                href='https://gitlab.com/tdekorne'
                rel='noreferrer'
                target='_blank'
            >
                <FaGitlab />
            </a>
        </div>
    );
};

export default HeaderSocials;
