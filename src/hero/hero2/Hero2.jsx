import React from 'react'
import { useEffect } from 'react';
import { useBlockTransition } from '../../components/TransitionContext';
import styles from './Hero2.module.css'

const Hero2 = () => {
    const imagesA= [
        "/images/a/a1.png", "/images/a/a2.png", "/images/a/a3.png", "/images/a/a4.png"
    ]
    const imagesB= [
        "/images/b/b1.png", "/images/b/b2.png", "/images/b/b3.png", "/images/b/b4.png"
    ]
    const imagesC= [
        "/images/c/c1.png", "/images/c/c2.png", "/images/c/c3.png", "/images/c/c4.png"
    ]
    const imagesD= [
        "/images/d/d1.png", "/images/d/d2.png", "/images/d/d3.png", "/images/d/d4.png"
    ]

    const imagesA2= [
        "/images/a/a1.png", "/images/a/a2.png", "/images/a/a3.png", "/images/a/a4.png", "/images/d/d4.png"
    ]
    const imagesB2= [
        "/images/d/d2.png", "/images/b/b2.png", "/images/b/b3.png", "/images/b/b4.png", "/images/b/b1.png"
    ]
    const imagesC2= [
        "/images/c/c1.png", "/images/c/c2.png", "/images/c/c4.png", "/images/c/c3.png", "/images/d/d1.png"
    ]

    const { navigateWithBlocks } = useBlockTransition();

    useEffect(() => {
        // Automatically transitions after 4 seconds
        const timer = setTimeout(() => {
        navigateWithBlocks('/hero-three');
        }, 3500);

        return () => clearTimeout(timer); // Clean up if user leaves early
    }, [navigateWithBlocks]);

  return (
    <div className={`${styles.container} flex items-center justify-center gap-2 relative overflow-hidden `}>
        {/* WEB VIEW */}
        <div className={`${styles.loopWrapper} `}>
            <div className={`${styles.loopTrack} animate-loop `}>
                {/* Original Items */}
                <img src='/images/a/a4.png' alt='image' aria-hidden="true" className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />
                <img src='/images/a/a1.png' alt='image' aria-hidden="true" className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />
                <img src='/images/a/a2.png' alt='image' aria-hidden="true" className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />
                <img src='/images/a/a3.png' alt='image' aria-hidden="true" className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />
                

                {/* duplicates */}
                {imagesA.map((item) => (
                    <img key={item} src={item} alt="image" aria-hidden="true" className="w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink" />
                ))}
                {imagesA.map((item) => (
                    <img key={item} src={item} alt='image' aria-hidden="true" className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />
                ))}
                {imagesA.map((item) => (
                    <img key={item} src={item} alt='image' aria-hidden="true" className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />
                ))}
                {imagesA.map((item) => (
                    <img key={item} src={item} alt='image' aria-hidden="true" className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />
                ))}
                {imagesA.map((item) => (
                    <img key={item} src={item} alt='image' aria-hidden="true" className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />
                ))}
                {imagesA.map((item) => (
                    <img key={item} src={item} alt='image' aria-hidden="true" className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />
                ))}
                {imagesA.map((item) => (
                    <img key={item} src={item} alt='image' aria-hidden="true" className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />
                ))}
                {imagesA.map((item) => (
                    <img key={item} src={item} alt='image' aria-hidden="true" className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />
                ))}
            </div>
        </div>
        <div className={`${styles.loopWrapper} `}>
            <div className={`${styles.loopTrack} animate-loop2 `}>
                {/* Original Items */}
                <img src='/images/b/b3.png' alt='image' aria-hidden="true" className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />
                <img src='/images/b/b4.png' alt='image' aria-hidden="true" className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />
                <img src='/images/b/b1.png' alt='image' aria-hidden="true" className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />
                <img src='/images/b/b2.png' alt='image' aria-hidden="true" className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />

                {/* duplicates */}
                {imagesB.map((item) => (
                    <img key={item} src={item} alt='image' className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />
                ))}
                {imagesB.map((item) => (
                    <img key={item} src={item} alt='image' aria-hidden="true" className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />
                ))}
                {imagesB.map((item) => (
                    <img key={item} src={item} alt='image' aria-hidden="true" className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />
                ))}
                {imagesB.map((item) => (
                    <img key={item} src={item} alt='image' aria-hidden="true" className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />
                ))}
                {imagesB.map((item) => (
                    <img key={item} src={item} alt='image' aria-hidden="true" className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />
                ))}
                {imagesB.map((item) => (
                    <img key={item} src={item} alt='image' aria-hidden="true" className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />
                ))}
                {imagesB.map((item) => (
                    <img key={item} src={item} alt='image' aria-hidden="true" className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />
                ))}
                {imagesB.map((item) => (
                    <img key={item} src={item} alt='image' aria-hidden="true" className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />
                ))}
            </div>
        </div>
        <div className={`${styles.loopWrapper} `}>
            <div className={`${styles.loopTrack} animate-loop3 `}>
                {/* Original Items */}
                <img src='/images/c/c2.png' alt='image' aria-hidden="true" className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />
                <img src='/images/c/c3.png' alt='image' aria-hidden="true" className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />
                <img src='/images/c/c4.png' alt='image' aria-hidden="true" className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />
                <img src='/images/c/c1.png' alt='image' aria-hidden="true" className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />

                {/* duplicates */}
                {imagesC.map((item) => (
                    <img key={item} src={item} alt='image' className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />
                ))}
                {imagesC.map((item) => (
                    <img key={item} src={item} alt='image' aria-hidden="true" className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />
                ))}
                {imagesC.map((item) => (
                    <img key={item} src={item} alt='image' aria-hidden="true" className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />
                ))}
                {imagesC.map((item) => (
                    <img key={item} src={item} alt='image' aria-hidden="true" className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />
                ))}
                {imagesC.map((item) => (
                    <img key={item} src={item} alt='image' aria-hidden="true" className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />
                ))}
                {imagesC.map((item) => (
                    <img key={item} src={item} alt='image' aria-hidden="true" className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />
                ))}
                {imagesC.map((item) => (
                    <img key={item} src={item} alt='image' aria-hidden="true" className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />
                ))}
                {imagesC.map((item) => (
                    <img key={item} src={item} alt='image' aria-hidden="true" className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />
                ))}
            </div>
        </div>
        <div className={`${styles.loopWrapper} `}>
            <div className={`${styles.loopTrack} animate-loop4 `}>
                {/* Original Items */}
                {imagesD.map((item) => (
                    <img key={item} src={item} alt='image' className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />
                ))}

                {/* duplicates */}
                {imagesD.map((item) => (
                    <img key={item} src={item} alt='image' aria-hidden="true" className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />
                ))}
                {imagesD.map((item) => (
                    <img key={item} src={item} alt='image' aria-hidden="true" className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />
                ))}
                {imagesD.map((item) => (
                    <img key={item} src={item} alt='image' aria-hidden="true" className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />
                ))}
                {imagesD.map((item) => (
                    <img key={item} src={item} alt='image' aria-hidden="true" className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />
                ))}
                {imagesD.map((item) => (
                    <img key={item} src={item} alt='image' aria-hidden="true" className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />
                ))}
                {imagesD.map((item) => (
                    <img key={item} src={item} alt='image' aria-hidden="true" className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />
                ))}
                {imagesD.map((item) => (
                    <img key={item} src={item} alt='image' aria-hidden="true" className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />
                ))}
                {imagesD.map((item) => (
                    <img key={item} src={item} alt='image' aria-hidden="true" className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />
                ))}
            </div>
        </div>

        {/* MOBILE VIEW */}
        <div className={`${styles.loopWrapper2}`}>
            <div className={`${styles.loopTrack} animate-loop `}>
                {/* Original Items */}
                <img src='/images/a/a4.png' alt='image' aria-hidden="true" className='w-[100px] h-[130px] object-cover mb-1 border-1 border-white shrink ' />
                <img src='/images/a/a1.png' alt='image' aria-hidden="true" className='w-[100px] h-[130px] object-cover mb-1 border-1 border-white shrink ' />
                <img src='/images/a/a2.png' alt='image' aria-hidden="true" className='w-[100px] h-[130px] object-cover mb-1 border-1 border-white shrink ' />
                <img src='/images/a/a3.png' alt='image' aria-hidden="true" className='w-[100px] h-[130px] object-cover mb-1 border-1 border-white shrink ' />
                <img src="/images/d/d4.png" alt='image' aria-hidden="true" className='w-[100px] h-[130px] object-cover mb-1 border-1 border-white shrink ' />
                

                {/* duplicates */}
                {imagesA2.map((item) => (
                    <img key={item} src={item} alt="image" aria-hidden="true" className="w-[100px] h-[130px] object-cover mb-1 border-1 border-white shrink" />
                ))}
                {imagesA2.map((item) => (
                    <img key={item} src={item} alt='image' aria-hidden="true" className='w-[100px] h-[130px] object-cover mb-1 border-1 border-white shrink ' />
                ))}
                {imagesA2.map((item) => (
                    <img key={item} src={item} alt='image' aria-hidden="true" className='w-[100px] h-[130px] object-cover mb-1 border-1 border-white shrink ' />
                ))}
                {imagesA2.map((item) => (
                    <img key={item} src={item} alt='image' aria-hidden="true" className='w-[100px] h-[130px] object-cover mb-1 border-1 border-white shrink ' />
                ))}
                {imagesA2.map((item) => (
                    <img key={item} src={item} alt='image' aria-hidden="true" className='w-[100px] h-[130px] object-cover mb-1 border-1 border-white shrink ' />
                ))}
                {imagesA2.map((item) => (
                    <img key={item} src={item} alt='image' aria-hidden="true" className='w-[100px] h-[130px] object-cover mb-1 border-1 border-white shrink ' />
                ))}
            </div>
        </div>
        <div className={`${styles.loopWrapper2} `}>
            <div className={`${styles.loopTrack} animate-loop2 `}>
                {/* Original Items */}
                <img src='/images/b/b3.png' alt='image' aria-hidden="true" className='w-[100px] h-[130px] object-cover mb-1 border-1 border-white shrink ' />
                <img src='/images/b/b4.png' alt='image' aria-hidden="true" className='w-[100px] h-[130px] object-cover mb-1 border-1 border-white shrink ' />
                <img src='/images/b/b1.png' alt='image' aria-hidden="true" className='w-[100px] h-[130px] object-cover mb-1 border-1 border-white shrink ' />
                <img src='/images/b/b2.png' alt='image' aria-hidden="true" className='w-[100px] h-[130px] object-cover mb-1 border-1 border-white shrink ' />
                <img src='/images/d/d2.png' alt='image' aria-hidden="true" className='w-[100px] h-[130px] object-cover mb-1 border-1 border-white shrink ' />

                {/* duplicates */}
                {imagesB2.map((item) => (
                    <img key={item} src={item} alt='image' aria-hidden="true" className='w-[100px] h-[130px] object-cover mb-1 border-1 border-white shrink ' />
                ))}
                {imagesB2.map((item) => (
                    <img key={item} src={item} alt='image' aria-hidden="true" className='w-[100px] h-[130px] object-cover mb-1 border-1 border-white shrink ' />
                ))}
                {imagesB2.map((item) => (
                    <img key={item} src={item} alt='image' aria-hidden="true" className='w-[100px] h-[130px] object-cover mb-1 border-1 border-white shrink ' />
                ))}
                {imagesB2.map((item) => (
                    <img key={item} src={item} alt='image' aria-hidden="true" className='w-[100px] h-[130px] object-cover mb-1 border-1 border-white shrink ' />
                ))}
                {imagesB2.map((item) => (
                    <img key={item} src={item} alt='image' aria-hidden="true" className='w-[100px] h-[130px] object-cover mb-1 border-1 border-white shrink ' />
                ))}
                {imagesB2.map((item) => (
                    <img key={item} src={item} alt='image' aria-hidden="true" className='w-[100px] h-[130px] object-cover mb-1 border-1 border-white shrink ' />
                ))}
            </div>
        </div>
        <div className={`${styles.loopWrapper2} `}>
            <div className={`${styles.loopTrack} animate-loop3 `}>
                {/* Original Items */}
                <img src='/images/c/c2.png' alt='image' aria-hidden="true" className='w-[100px] h-[130px] object-cover mb-1 border-1 border-white shrink ' />
                <img src='/images/c/c3.png' alt='image' aria-hidden="true" className='w-[100px] h-[130px] object-cover mb-1 border-1 border-white shrink ' />
                <img src='/images/c/c4.png' alt='image' aria-hidden="true" className='w-[100px] h-[130px] object-cover mb-1 border-1 border-white shrink ' />
                <img src='/images/c/c1.png' alt='image' aria-hidden="true" className='w-[100px] h-[130px] object-cover mb-1 border-1 border-white shrink ' />
                <img src='/images/d/d1.png' alt='image' aria-hidden="true" className='w-[100px] h-[130px] object-cover mb-1 border-1 border-white shrink ' />

                {/* duplicates */}
                {imagesC2.map((item) => (
                    <img key={item} src={item} alt='image' aria-hidden="true" className='w-[100px] h-[130px] object-cover mb-1 border-1 border-white shrink ' />
                ))}
                {imagesC2.map((item) => (
                    <img key={item} src={item} alt='image' aria-hidden="true" className='w-[100px] h-[130px] object-cover mb-1 border-1 border-white shrink ' />
                ))}
                {imagesC2.map((item) => (
                    <img key={item} src={item} alt='image' aria-hidden="true" className='w-[100px] h-[130px] object-cover mb-1 border-1 border-white shrink ' />
                ))}
                {imagesC2.map((item) => (
                    <img key={item} src={item} alt='image' aria-hidden="true" className='w-[100px] h-[130px] object-cover mb-1 border-1 border-white shrink ' />
                ))}
                {imagesC2.map((item) => (
                    <img key={item} src={item} alt='image' aria-hidden="true" className='w-[100px] h-[130px] object-cover mb-1 border-1 border-white shrink ' />
                ))}
                {imagesC2.map((item) => (
                    <img key={item} src={item} alt='image' aria-hidden="true" className='w-[100px] h-[130px] object-cover mb-1 border-1 border-white shrink ' />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Hero2