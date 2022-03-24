import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { FaTelegramPlane } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_mhp5jim',
            'template_e2vqvoe',
            form.current,
            's1p9AyNwgDxHWF2hW'
        );

        e.target.reset();
    };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>tdekorne@gmail.com</h5>
                        <a
                            href='mailto:tdekorne@gmail.com'
                            rel='noreferrer'
                            target='_blank'
                        >
                            Send a message
                        </a>
                    </article>
                    <article className='contact__option'>
                        <RiMessengerLine className='contact__option-icon' />
                        <h4>Messenger</h4>
                        <h5>tobin.dekorne</h5>
                        <a
                            href='https://m.me/tobin.dekorne'
                            rel='noreferrer'
                            target='_blank'
                        >
                            Send a message
                        </a>
                    </article>
                    <article className='contact__option'>
                        <FaTelegramPlane className='contact__option-icon' />
                        <h4>Telegram</h4>
                        <h5>@Tobindekorne</h5>
                        <a
                            href='https://t.me/tobindekorne'
                            rel='noreferrer'
                            target='_blank'
                        >
                            Send a message
                        </a>
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS */}
                <form ref={form} onSubmit={sendEmail}>
                    <input
                        type='text'
                        name='name'
                        placeholder='Your Full Name'
                        required
                    />
                    <input
                        type='text'
                        name='email'
                        placeholder='Your Email'
                        required
                    />
                    <textarea
                        name='message'
                        rows='7'
                        placeholder='Your Message'
                        required
                    />
                    <button type='submit' className='btn btn-primary'>
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
