import React, { createRef } from 'react';
import { FaGraduationCap } from 'react-icons/fa';

import './HighLight.scss';
import useIntersecting from '../../Hooks/useIntersecting';
const EducationData = [
    {   
        initialDate: '09/2022',
        institution: 'Undergraduation',
        level: 'BSC CSIT',
        summary: 'Studying BSC CSIT and technological stuffs and also I am self taught developer. ',
    },
    {
        initialDate: '01/2021',
        completedDate: '12/2022',
        institution: 'Premier Secondary School',
        level: 'NEB Grade 12',
        summary:
            'Certified by +2 with school leaving certificate of 3.2 CGPA. Study wasnt that great, since we all suffered from Covid-19 and We got backdrops in our Studies as well. ',
    },
    {
        initialDate: '09/2019',
        completedDate: '08/2020',
        institution: 'Hanumanteshwor Secondary School',
        level: 'Secondary Education Examination',
        summary:
            'Certified by Secondary Education Examination (SEE) with 3.7 GPA. It was the great experience with friends and teachers.',
    },
    {
        initialDate: '01/2018',
        completedDate: '12/2019',
        institution: 'Silver Start English Boarding School',
        level: 'District level education',
        summary:
            'Completed district level examination[BLE] with GPA 3.9. It was my best of all time achived in the District.',
    },
];
const ExperienceData = [
    {
        initialDate: '09/2022',
        institution: 'Flutter Documentation | Resources',
        level: 'Flutter',
        summary:
            'Learing to build real world native flutter application. I am right now learning different state management in flutter.',
    },
    {
        initialDate: '01/2021',
        institution: 'Official Documentation | YouTube ',
        level: 'TypeScript',
        summary:
            'Learing to implement and get the big resources and collaboartion with different organizations. I love typescript more than javascript. ',
    },
    {
        initialDate: '09/2019',
        institution: 'MDN Web Docs',
        level: 'JavaScript',
        summary:
            'Learned to build web application using Javascript as the frontend and backend with Node JS with best design and implementation.',
    },
    {
        initialDate: '01/2018',
        completedDate: '12/2019',
        institution: 'FCC | YouTube | Docs',
        level: 'Python | AI Engineer',
        summary:
            'Learned the python as a intermediate and learned some of Machine learning and building hacking tools.',
    },
];

const HighLight = () => {
    const ref = createRef<HTMLDivElement>();
    useIntersecting(ref, 'Nischal Dahal | Education');

    return (
        <div className='df'>
            <section id='education'>
                <h1 ref={ref} className='title center'>
                    Education
                </h1>

                <div className='center'>
                    {EducationData.map((item, index) => (
                        <div className='box' key={index}>
                            <h1 className='sub-title'>
                                <FaGraduationCap className='cap' /> {item.level}
                            </h1>

                            <div className='detail'>
                                <p className='date'>
                                    {item.initialDate} - {item?.completedDate || 'Undergoing'}
                                </p>
                                <p className='high'>{item.institution}</p>
                            </div>
                            <p>{item.summary}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section id='experience'>
                <h1 ref={ref} className='title center'>
                    Experience
                </h1>

                <div className='center'>
                    {ExperienceData.map((item, index) => (
                        <div className='box' key={index}>
                            <h1 className='sub-title'>
                                {/* <FaSuitcase className='cap' /> */}
                                {item.level}
                            </h1>

                            <div className='detail'>
                                <p className='date'>
                                    {item.initialDate} - {item?.completedDate || 'Undergoing'}
                                </p>
                                <p className='high'>{item.institution}</p>
                            </div>
                            <p>{item.summary}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default HighLight;
