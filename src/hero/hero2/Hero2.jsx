import React from 'react'
import { useEffect } from 'react';
import { useBlockTransition } from '../../components/TransitionContext';
import styles from './Hero2.module.css'

const Hero2 = () => {
    const imagesA= [
        "https://res.cloudinary.com/dumoghqlq/image/upload/v1795550804/a1_cywm9c.png", "https://res.cloudinary.com/dumoghqlq/image/upload/v1795550804/a2_j7vwvm.png", "https://res.cloudinary.com/dumoghqlq/image/upload/v1795550804/a3_fckaya.png", "https://res.cloudinary.com/dumoghqlq/image/upload/v1795550804/a4_r9jdja.png"
    ]
    const imagesB= [
        "https://res.cloudinary.com/dumoghqlq/image/upload/v1795550848/b1_vhvko0.png", "https://res.cloudinary.com/dumoghqlq/image/upload/v1795550846/b2_tdhvzg.png", "https://res.cloudinary.com/dumoghqlq/image/upload/v1795550846/b3_jfesdn.png", "https://res.cloudinary.com/dumoghqlq/image/upload/v1795550847/b4_hs8fci.png"
    ]
    const imagesC= [
        "https://res.cloudinary.com/dumoghqlq/image/upload/v1795550969/c1_pg12gr.png", "https://res.cloudinary.com/dumoghqlq/image/upload/v1795550969/c2_t9d0mj.png", "https://res.cloudinary.com/dumoghqlq/image/upload/v1795550970/c3_q49a0k.png", "https://res.cloudinary.com/dumoghqlq/image/upload/v1795550968/c4_wvs8gm.png"
    ]
    const imagesD= [
        "https://res.cloudinary.com/dumoghqlq/image/upload/v1795551005/d1_qxhkkr.png", "https://res.cloudinary.com/dumoghqlq/image/upload/v1795551005/d2_gssayk.png", "https://res.cloudinary.com/dumoghqlq/image/upload/v1795551002/d3_yidq3z.png", "https://res.cloudinary.com/dumoghqlq/image/upload/v1795551005/d4_dysss0.png"
    ]

    const imagesA2= [
        "https://res.cloudinary.com/dumoghqlq/image/upload/v1795550804/a1_cywm9c.png", "https://res.cloudinary.com/dumoghqlq/image/upload/v1795550804/a2_j7vwvm.png", "https://res.cloudinary.com/dumoghqlq/image/upload/v1795550804/a3_fckaya.png", "https://res.cloudinary.com/dumoghqlq/image/upload/v1795550804/a4_r9jdja.png", "https://res.cloudinary.com/dumoghqlq/image/upload/v1795551005/d4_dysss0.png"
    ]
    const imagesB2= [
        "https://res.cloudinary.com/dumoghqlq/image/upload/v1795551005/d2_gssayk.png", "https://res.cloudinary.com/dumoghqlq/image/upload/v1795550846/b2_tdhvzg.png", "https://res.cloudinary.com/dumoghqlq/image/upload/v1795550846/b3_jfesdn.png", "https://res.cloudinary.com/dumoghqlq/image/upload/v1795550847/b4_hs8fci.png", "https://res.cloudinary.com/dumoghqlq/image/upload/v1795550848/b1_vhvko0.png"
    ]
    const imagesC2= [
        "https://res.cloudinary.com/dumoghqlq/image/upload/v1795550969/c1_pg12gr.png", "https://res.cloudinary.com/dumoghqlq/image/upload/v1795550969/c2_t9d0mj.png", "https://res.cloudinary.com/dumoghqlq/image/upload/v1795550968/c4_wvs8gm.png", "https://res.cloudinary.com/dumoghqlq/image/upload/v1795550970/c3_q49a0k.png", "https://res.cloudinary.com/dumoghqlq/image/upload/v1795551005/d1_qxhkkr.png"
    ]

    const { navigateWithBlocks } = useBlockTransition();

    useEffect(() => {
        // Automatically transitions after 4.5 seconds
        const timer = setTimeout(() => {
        navigateWithBlocks('/hero-three');
        }, 4500);

        return () => clearTimeout(timer); // Clean up if user leaves early
    }, [navigateWithBlocks]);

  return (
    <div className={`${styles.container} flex items-center justify-center gap-1 sm:gap-2 relative overflow-hidden `}>
        {/* WEB VIEW */}
        <div className={`${styles.loopWrapper} `}>
            <div className={`${styles.loopTrack} animate-loop `}>
                {/* Original Items */}
                <img src='https://res.cloudinary.com/dumoghqlq/image/upload/v1795550804/a4_r9jdja.png' alt='image' aria-hidden="true" className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />
                <img src='https://res.cloudinary.com/dumoghqlq/image/upload/v1795550804/a1_cywm9c.png' alt='image' aria-hidden="true" className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />
                <img src='https://res.cloudinary.com/dumoghqlq/image/upload/v1795550804/a2_j7vwvm.png' alt='image' aria-hidden="true" className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />
                <img src='https://res.cloudinary.com/dumoghqlq/image/upload/v1795550804/a3_fckaya.png' alt='image' aria-hidden="true" className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />
                

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
                <img src='https://res.cloudinary.com/dumoghqlq/image/upload/v1795550846/b3_jfesdn.png' alt='image' aria-hidden="true" className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />
                <img src='https://res.cloudinary.com/dumoghqlq/image/upload/v1795550847/b4_hs8fci.png' alt='image' aria-hidden="true" className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />
                <img src='https://res.cloudinary.com/dumoghqlq/image/upload/v1795550848/b1_vhvko0.png' alt='image' aria-hidden="true" className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />
                <img src='https://res.cloudinary.com/dumoghqlq/image/upload/v1795550846/b2_tdhvzg.png' alt='image' aria-hidden="true" className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />

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
                <img src='https://res.cloudinary.com/dumoghqlq/image/upload/v1795550969/c2_t9d0mj.png' alt='image' aria-hidden="true" className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />
                <img src='https://res.cloudinary.com/dumoghqlq/image/upload/v1795550970/c3_q49a0k.png' alt='image' aria-hidden="true" className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />
                <img src='https://res.cloudinary.com/dumoghqlq/image/upload/v1795550968/c4_wvs8gm.png' alt='image' aria-hidden="true" className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />
                <img src='https://res.cloudinary.com/dumoghqlq/image/upload/v1795550969/c1_pg12gr.png' alt='image' aria-hidden="true" className='w-[250px] h-[150px] object-cover mb-2 border-1 border-white shrink ' />

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
                <img src='https://res.cloudinary.com/dumoghqlq/image/upload/v1795550804/a4_r9jdja.png' alt='image' aria-hidden="true" className='w-[100px] h-[130px] object-cover mb-1 border-1 border-white shrink ' />
                <img src='https://res.cloudinary.com/dumoghqlq/image/upload/v1795550804/a1_cywm9c.png' alt='image' aria-hidden="true" className='w-[100px] h-[130px] object-cover mb-1 border-1 border-white shrink ' />
                <img src='https://res.cloudinary.com/dumoghqlq/image/upload/v1795550804/a2_j7vwvm.png' alt='image' aria-hidden="true" className='w-[100px] h-[130px] object-cover mb-1 border-1 border-white shrink ' />
                <img src='https://res.cloudinary.com/dumoghqlq/image/upload/v1795550804/a3_fckaya.png' alt='image' aria-hidden="true" className='w-[100px] h-[130px] object-cover mb-1 border-1 border-white shrink ' />
                <img src="https://res.cloudinary.com/dumoghqlq/image/upload/v1795551005/d4_dysss0.png" alt='image' aria-hidden="true" className='w-[100px] h-[130px] object-cover mb-1 border-1 border-white shrink ' />
                

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
                <img src='https://res.cloudinary.com/dumoghqlq/image/upload/v1795550846/b3_jfesdn.png' alt='image' aria-hidden="true" className='w-[100px] h-[130px] object-cover mb-1 border-1 border-white shrink ' />
                <img src='https://res.cloudinary.com/dumoghqlq/image/upload/v1795550847/b4_hs8fci.png' alt='image' aria-hidden="true" className='w-[100px] h-[130px] object-cover mb-1 border-1 border-white shrink ' />
                <img src='https://res.cloudinary.com/dumoghqlq/image/upload/v1795550848/b1_vhvko0.png' alt='image' aria-hidden="true" className='w-[100px] h-[130px] object-cover mb-1 border-1 border-white shrink ' />
                <img src='https://res.cloudinary.com/dumoghqlq/image/upload/v1795550846/b2_tdhvzg.png' alt='image' aria-hidden="true" className='w-[100px] h-[130px] object-cover mb-1 border-1 border-white shrink ' />
                <img src='https://res.cloudinary.com/dumoghqlq/image/upload/v1795551005/d2_gssayk.png' alt='image' aria-hidden="true" className='w-[100px] h-[130px] object-cover mb-1 border-1 border-white shrink ' />

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
                <img src='https://res.cloudinary.com/dumoghqlq/image/upload/v1795550969/c2_t9d0mj.png' alt='image' aria-hidden="true" className='w-[100px] h-[130px] object-cover mb-1 border-1 border-white shrink ' />
                <img src='https://res.cloudinary.com/dumoghqlq/image/upload/v1795550970/c3_q49a0k.png' alt='image' aria-hidden="true" className='w-[100px] h-[130px] object-cover mb-1 border-1 border-white shrink ' />
                <img src='https://res.cloudinary.com/dumoghqlq/image/upload/v1795550968/c4_wvs8gm.png' alt='image' aria-hidden="true" className='w-[100px] h-[130px] object-cover mb-1 border-1 border-white shrink ' />
                <img src='https://res.cloudinary.com/dumoghqlq/image/upload/v1795550969/c1_pg12gr.png' alt='image' aria-hidden="true" className='w-[100px] h-[130px] object-cover mb-1 border-1 border-white shrink ' />
                <img src='https://res.cloudinary.com/dumoghqlq/image/upload/v1795551005/d1_qxhkkr.png' alt='image' aria-hidden="true" className='w-[100px] h-[130px] object-cover mb-1 border-1 border-white shrink ' />

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