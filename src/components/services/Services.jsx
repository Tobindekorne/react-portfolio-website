import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className='container services__container'>
                <article className='service'>
                    <div className='service__head'>
                        <h3>UI/UX Design</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Wireframes</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Themes</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Website Redesign</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Visual Design</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Data Visualization</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>UI Testing</p>
                        </li>
                    </ul>
                </article>
                {/* END OF UI/UX */}
                <article className='service'>
                    <div className='service__head'>
                        <h3>Web Development</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Custom Software</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Responsive Design</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Enterprise Solutions</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Online Tools</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Maintenance Support</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>QA & Testing</p>
                        </li>
                    </ul>
                </article>
                {/* END OF WEB DEVELOPMENT */}
                <article className='service'>
                    <div className='service__head'>
                        <h3>Content Creation</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Graphic Design</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Logo Design</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Blog writing</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Documentation Writing</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Copy Editing</p>
                        </li>
                    </ul>
                </article>
                {/* END OF CONTENT CREATION */}
            </div>
        </section>
    );
};

export default Services;
