import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/tic-tac-toe.png';
import IMG6 from '../../assets/portfolio6.jpg';
import IMG7 from '../../assets/portfolio7.jpg';
import IMG8 from '../../assets/portfolio8.jpg';
import IMG9 from '../../assets/portfolio9.png';
import GOALS from '../../assets/goals.jpg';

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Math Tic-Tac-Toe',
        github: 'https://github.com/Tobindekorne/nextjs-math-tic-tac-toe',
        demo: 'https://tic-tac-toe.tobindekorne.com',
    },
    {
        id: 6,
        image: IMG6,
        title: 'insta-2.0',
        github: 'https://github.com/Tobindekorne/insta-2',
        demo: 'https://insta2.tobindekorne.com',
    },
    {
        id: 5,
        image: GOALS,
        title: 'GoalSetter',
        github: 'https://github.com/Tobindekorne/mern-goals',
        demo: 'https://mernapptobin.herokuapp.com/login',
    },
    {
        id: 2,
        image: IMG9,
        title: 'Particle Effect Generator - P5JS',
        github: 'https://github.com/Tobindekorne/p5js_particles',
        demo: 'https://tobin-particle-demo.netlify.app/',
    },
    {
        id: 3,
        image: IMG8,
        title: 'Sudoku Solver',
        github: 'https://github.com/Tobindekorne/sudoku_solver',
        demo: '',
    },
    {
        id: 4,
        image: IMG7,
        title: 'Github Finder',
        github: 'https://github.com/Tobindekorne/tobin-github-finder',
        demo: 'https://githubfinder-react-tobin.netlify.app',
    },
];

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio__container'>
                {data.map(({ id, image, title, github, demo }) => {
                    return (
                        <article key={id} className='portfolio__item'>
                            <div className='portfolio__item-image'>
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className='portfolio__item-cta'>
                                <a
                                    href={github}
                                    className='btn'
                                    rel='noreferrer'
                                    target='_blank'
                                >
                                    Github
                                </a>
                                {demo !== '' && (
                                    <a
                                        href={demo}
                                        className='btn btn-primary'
                                        rel='noreferrer'
                                        target='_blank'
                                    >
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Portfolio;
