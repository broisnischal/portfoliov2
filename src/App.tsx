import React from 'react';
import './App.scss';
import useLocalStorage from 'use-local-storage';
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs';
import Navbar from './Components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About.jsx';
import Skills from './pages/Skills/Skills';
import Works from './pages/Works/Works';

function App(): JSX.Element {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };

    return (
        <>
            <div className='App' data-theme={theme}>
                <p style={{ textAlign: 'center', padding: '10px 0' }}>
                    🔥 Website under construction, and You may experience some 🐞.
                </p>
                <Navbar>
                    <>
                        <button className='theme' onClick={switchTheme}>
                            {theme === 'dark' ? <BsSunFill /> : <BsFillMoonStarsFill />}
                        </button>
                    </>
                </Navbar>

                <Home />
                <About />
                <Skills />
                <Works />
            </div>
        </>
    );
}

export default App;
