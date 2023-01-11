import { FaHome, FaUser, FaUserGraduate, FaProjectDiagram } from 'react-icons/fa';
import { MdWork, MdOutlineMiscellaneousServices } from 'react-icons/md';
import { HiLightBulb } from 'react-icons/hi';
// import { GrServices } from 'react-icons/gr';
import { SiMaterialdesignicons, SiGooglemessages } from 'react-icons/si';

const Navitems = [
    {
        title: 'Home',
        icon: <FaHome />,
        path: '/home',
        id: '#home',
    },
    {
        title: 'About',
        icon: <FaUser />,
        path: '/about',
        id: '#about',
    },
    {
        title: 'Works',
        icon: <MdWork />,
        path: '/works',
        id: '#works',
    },
    {
        title: 'Education',
        icon: <FaUserGraduate />,
        path: '/education',
        id: '#education',
    },

    {
        title: 'Skills',
        icon: <HiLightBulb />,
        path: '/skills',
        id: '#skills',
    },
    {
        title: 'Services',
        icon: <MdOutlineMiscellaneousServices />,
        path: '/services',
        id: '#services',
    },
    {
        title: 'Designs',
        icon: <SiMaterialdesignicons />,
        path: '/designs',
        id: '#design',
    },
    {
        title: 'Projects',
        icon: <FaProjectDiagram />,
        path: '/projects',
        id: '#projects',
    },
    {
        title: 'Contact',
        icon: <SiGooglemessages />,
        path: '/contact',
        id: '#contact',
    },
];

export default Navitems;
