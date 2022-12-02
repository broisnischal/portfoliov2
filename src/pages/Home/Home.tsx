import './Home.scss';
import React from 'react';
import useProgessiveImage from '../../Hooks/useProgessiveImage';

function Home() {
    const high =
        'https://images.pexels.com/photos/14624618/pexels-photo-14624618.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    const low =
        'https://images.pexels.com/photos/14624618/pexels-photo-14624618.png?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1';
    const [src, { blur }] = useProgessiveImage(low, high);

    // const imgRef = useRef<HTMLImageElement>(null!);

    return (
        <>
            <section id='home'>
                <div className='box'>
                    <div className='img'>
                        <img
                            src={src}
                            style={{
                                width: 200,
                                filter: blur ? 'blur(20px)' : 'none',
                                transition: blur ? 'none' : 'filter 0.3s ease-out',
                            }}
                        />
                    </div>
                    <div className='desc'>
                        <h4>Hello it&apos;s me</h4>
                        <h1 className='title'>Nischal </h1>{' '}
                        <h3 className='sub'>
                            Also known as <span className='focus'>neeswebservices</span>.
                        </h3>
                        <span className='highlight'>
                            A simple guy who think&apos;s about everyone&apos;s death.{' '}
                        </span>
                        <p>
                            A creative <span className='emoji'>0️⃣</span> from Nepal who is trying to
                            become <span className='emoji'>!0️⃣</span>. Just kidding, hello if you
                            are <span className='focus'>reading</span> this which i know you
                            are,Then my name is Nischal Dahal and A big{' '}
                            <span className='focus'>applaud</span>👏 for you that you landed here in
                            my portfolio. Go through bottom sections with smooth scrolling to Deep
                            dive. <span className='info end'>&lt;/info&gt;</span>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Home;
