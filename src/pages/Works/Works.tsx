import React, { createRef } from 'react';
import useIntersecting from '../../Hooks/useIntersecting';
import './works.scss';

const workDatas = [
    {
        company: 'Routine of Nepal Technology',
        summary:
            'Working as Graphic Designer, content creator and News Editor. Also working as managing director of Page and Actively updating with new latest tech news',
        started: '2020 Dec 4',
    },
    {
        company: 'Vrit Technologies',
        summary:
            'Worked as Graphic Designer, and Social Media Manager. I gained lots of ideas and knowledge about different fields and factor to work with.',
        started: '2020 Dec 4',
        ended: 'Jan 2023',
    },
    {
        company: 'Premier College',
        summary:
            'Created Android application of Premier class where students can join zoom meeting class directly via app in a click with scheduled routine and Notification. ',
        started: '2020 Dec 4',
        ended: 'Jan 2023',
    },
];

const Works = () => {
    const ref = createRef<HTMLDivElement>();
    useIntersecting(ref, 'I am unemployed :(');

    return (
        <section id='works' ref={ref}>
            <h2 className='title center'>Works</h2>

            <div className='container'>
                {workDatas.map((item, index) => (
                    <div className='box center' key={index}>
                        <h2>{item.company}</h2>
                        <h5>
                            {item.started} - {item?.ended || 'Current'}
                        </h5>
                        <p> {item.summary} </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Works;
