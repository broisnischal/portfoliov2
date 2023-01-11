import React, { useEffect, useState } from 'react';
import Navitems from '../../data/navitems';
import './Sidebar.scss';

const Sidebar = () => {
    const [display, setDisplay] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setDisplay(true);
            } else {
                setDisplay(false);
            }
        });

        return () => {
            // window.removeEventListener('scroll', listening);
        };
    }, [setDisplay]);

    return display ? (
        <div className='sidebar'>
            {Navitems.map((item, i) => (
                <a href={item.id} key={i} title={item.title}>
                    {item.icon && <span className='icon'>{item.icon}</span>}
                </a>
            ))}
        </div>
    ) : null;
};

export default Sidebar;
