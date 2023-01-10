import Navitems from '../../data/navitems.js';
import './Navbar.scss';
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import React from 'react';

interface types {
    children: JSX.Element;
}

function Navbar({ children }: types) {
    const [open, setOpen] = React.useState(false);

    const [scrollTop, setScrollTop] = React.useState(0);
    const [bottom, setBottom] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);

    const toggleNav = () => {
        setOpen((prev) => !prev);
    };

    const onscroll = () => {
        const winscroll = document.documentElement.scrollTop;

        const height =
            document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = Math.floor((winscroll / height) * 100);
        if (scrolled >= 95 || scrolled <= 7) {
            setBottom(true);
        } else {
            setBottom(false);
        }
        if (scrolled >= 10) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
        setScrollTop(scrolled);
    };

    React.useEffect(() => {
        window.addEventListener('scroll', onscroll);
    }, []);

    return (
        <>
            <nav>
                <div className='logo'>
                    <h2>{children} nws</h2>
                </div>
                <div className={open ? 'right show' : 'right hide'}>
                    {Navitems.map((item, i) => (
                        <a href={item.id} key={i} title={item.title}>
                            {item.icon && <span className='icon'>{item.icon}</span>}
                        </a>
                    ))}
                    {scrolled && (
                        <div className='resp' style={{ margin: 10 }}>
                            {open ? (
                                <ImCross className='icon' onClick={toggleNav} />
                            ) : (
                                <FaBars onClick={toggleNav} />
                            )}
                        </div>
                    )}
                </div>
                <div className='resp'>
                    {open ? <ImCross onClick={toggleNav} /> : <FaBars onClick={toggleNav} />}
                </div>
            </nav>
            <div className={bottom ? 'horizontal-box bottom' : 'horizontal-box'}>
                <div className='inner' style={{ width: `${scrollTop}%` }}></div>
            </div>
        </>
    );
}

export default Navbar;
