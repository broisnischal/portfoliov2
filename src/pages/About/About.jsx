import { useRef } from 'react';
import useIntersecting from '../../Hooks/useIntersecting';
import './About.scss';

function About() {
    const aboutRef = useRef();

    useIntersecting(aboutRef, 'Nischal Dahal | About');
    return (
        <section id='about' ref={aboutRef}>
            <div className='center'>
                <h1 className='title center'>About ME</h1>
                <div className='box'>
                    <div className='img'>
                        <img
                            src={
                                'https://res.cloudinary.com/dacp0r5b7/image/upload/v1664002636/works/profile_oaaqbk.jpg'
                            }
                            style={{ width: '150px', height: '150px' }}
                            // onLoad={() => setLoaded(true)}
                            // style={loaded ? {} : { display: 'none' }}
                        />
                        <div className='right'>
                            <ul>
                                <li>
                                    <h3>Window Lover</h3>
                                </li>
                                <li>
                                    <h3>Google Regex</h3>
                                </li>
                                <li>
                                    <h3>Editor</h3>
                                </li>
                                <li>
                                    <h3>Hacker</h3>
                                </li>
                                <li>
                                    <h3>Dreamer</h3>
                                </li>
                                <li>
                                    <h3>Technophile</h3>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='desc'>
                        Hey you 🚀, Great ! that you made it here , So now lets find me more,
                        I&apos;m tech <span className='focus'>enthusiast</span> and night dreamer.I
                        am <span className='focus'>BlackCat</span> who is willing to learn
                        everything possible also,I am a Full Stack Developer, I mean Pull stack who
                        pulls code from Github and Stackoverflow ,Hehe Jokes a margin-left.
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
