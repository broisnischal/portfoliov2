import Navitems from '../../data/navitems.js';
import './Navbar.scss';

interface types {
    children: JSX.Element;
}

function Navbar({ children }: types) {
    return (
        <nav>
            <div className='logo'>neeswebservices</div>
            <div className='right'>
                {Navitems.map((item, i) => (
                    <a href={item.id} key={i}>
                        {item.icon && <span className='icon'>{item.icon}</span>}
                    </a>
                ))}
                {children}
            </div>
        </nav>
    );
}

export default Navbar;
