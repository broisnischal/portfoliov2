import './Skills.scss';
import Git from '../../assets/stickers/git.png';
import One01 from '../../assets/stickers/1001.png';
import Blender from '../../assets/stickers/blender.png';
import csharp from '../../assets/stickers/csharp.png';
import code from '../../assets/stickers/code.png';
import flutter from '../../assets/stickers/flutter.png';
import github from '../../assets/stickers/github.png';
import js from '../../assets/stickers/js.png';
import node from '../../assets/stickers/node.png';
import php from '../../assets/stickers/php.png';
import ps from '../../assets/stickers/ps.png';
import python from '../../assets/stickers/python.png';
import react from '../../assets/stickers/react.png';
import redux from '../../assets/stickers/redux.png';
import rust from '../../assets/stickers/rust.png';
import spread from '../../assets/stickers/spread.png';
import ts from '../../assets/stickers/ts.png';
import React, { createRef } from 'react';
import useIntersecting from '../../Hooks/useIntersecting';

function Skills() {
    const [active, setActive] = React.useState(false);

    React.useEffect(() => {
        setInterval(() => {
            setActive(true);
            setActive(false);
        }, 1000);
    }, []);

    const ref = createRef<HTMLDivElement>();

    useIntersecting(ref, 'Nischal Dahal | Skills');

    return (
        <section id='skills' ref={ref}>
            <div className='center'>
                <h1 className='title center'>Skills</h1>
                <div className='box'>
                    <div className='img-skills'>
                        <img className={active ? 'active' : ''} src={Git} alt='' />
                        <img className={active ? 'active' : ''} src={One01} alt='' />
                        <img className={active ? 'active' : ''} src={Blender} alt='' />
                        <img className={active ? 'active' : ''} src={csharp} alt='' />
                        <img className={active ? 'active' : ''} src={code} alt='' />
                        <img className={active ? 'active' : ''} src={flutter} alt='' />
                        <img className={active ? 'active' : ''} src={github} alt='' />
                        <img className={active ? 'active' : ''} src={js} alt='' />
                        <img className={active ? 'active' : ''} src={node} alt='' />
                        <img className={active ? 'active' : ''} src={php} alt='' />
                        <img className={active ? 'active' : ''} src={python} alt='' />
                        <img className={active ? 'active' : ''} src={ps} alt='' />
                        <img className={active ? 'active' : ''} src={react} alt='' />
                        <img className={active ? 'active' : ''} src={redux} alt='' />
                        <img className={active ? 'active' : ''} src={rust} alt='' />
                        <img className={active ? 'active' : ''} src={spread} alt='' />
                        <img className={active ? 'active' : ''} src={ts} alt='' />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
