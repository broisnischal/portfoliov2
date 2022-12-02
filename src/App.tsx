import './App.css';
import useLocalStorage from 'use-local-storage';
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs';
import Navbar from './Components/Navbar/Navbar';
import Home from './pages/Home/Home';

function App(): JSX.Element {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };

    return (
        <div className='App' data-theme={theme}>
            <span>
                This website is in under development.{' '}
                <a href='https://dahal-nischal.com.np/'>Check production </a>{' '}
            </span>
            <Navbar>
                <button onClick={switchTheme}>
                    {theme === 'dark' ? <BsSunFill /> : <BsFillMoonStarsFill />}
                </button>
            </Navbar>
            <Home />
        </div>
    );
}

export default App;
