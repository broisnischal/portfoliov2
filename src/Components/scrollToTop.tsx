import React from 'react';
import './scroll.scss';
const ScrollToTop = () => {
    const scroll = () => {
        window.scrollTo(0, 0);
    };

    return (
        <button className='top' onClick={scroll}>
            Top
        </button>
    );
};

export default ScrollToTop;
