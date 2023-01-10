import React, { createRef } from 'react';
import useIntersecting from '../../Hooks/useIntersecting';

const Works = () => {
    const ref = createRef<HTMLDivElement>();
    useIntersecting(ref, 'I am unemployed :(');

    return (
        <section id='works' ref={ref}>
            <h2 className='title center'>Works</h2>
            <p className='center'>Unemployed ! I am seeking for a job : ( </p>
        </section>
    );
};

export default Works;
