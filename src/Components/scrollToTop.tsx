import React from 'react';
import './scroll.scss';
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { FaArrowAltCircleUp } from 'react-icons/fa';

const ScrollToTop = ({ switchTheme, theme }: any) => {
    const scroll = () => {
        window.scrollTo(0, 0);
    };

    return (
        <>
            <button className='bottomtheme' onClick={switchTheme}>
                {theme === 'dark' ? <BsSunFill /> : <BsFillMoonStarsFill />}
            </button>
            <button className='top' onClick={scroll}>
                <FaArrowAltCircleUp />
            </button>
        </>
    );
};

export default ScrollToTop;
