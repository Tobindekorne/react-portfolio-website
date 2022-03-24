import React, { useEffect, useState } from 'react';
import './about.css';
import ME from '../../assets/me.png';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import axios from 'axios';

const About = () => {
    const [githubData, setGithubData] = useState({});
    useEffect(async () => {
        let githubClientId, githubClientSecret;
        if (process.env.NODE_ENV !== 'production') {
            githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
            githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
        } else {
            githubClientId = process.env.GITHUB_CLIENT_ID;
            githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
        }
        const github_api_url = `https://api.github.com/users/Tobindekorne?client_id=${githubClientId}&client_secret=${githubClientSecret}`;

        const getData = async () => {
            const myData = await axios.get(github_api_url);
            setGithubData(myData.data);
        };

        getData();
    }, []);

    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={ME} alt='' />
                    </div>
                </div>

                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>
                        </article>
                        {/* <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>200+ Worldwide</small>
                        </article> */}
                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>
                                {githubData.public_repos &&
                                    Math.floor(githubData.public_repos / 10) *
                                        10}
                                + Completed
                            </small>
                        </article>
                    </div>

                    <p>
                        I am a San Diego based full stack engineer currently
                        working as a freelancer. Javascript is my jam and I'm
                        enjoying learning new libraries and frameworks like
                        React JS and Tailwind. I am constantly looking for new
                        things to learn and new opportunities to grow and branch
                        out as an engineer. Whether you need help improving your
                        site, are just starting a new site, or have an idea and
                        want to collab on a new project, please reach out!
                    </p>

                    <a href='#contact' className='btn btn-primary'>
                        Let's Talk
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
