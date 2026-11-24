import React from 'react'
import styles from './Hero3.module.css'
import { useEffect } from 'react';
import { useBlockTransition } from '../../components/TransitionContext';

const Hero3 = () => {
    const { navigateWithBlocks } = useBlockTransition();
    
    useEffect(() => {
        // Automatically transitions after 5.5 seconds
        const timer = setTimeout(() => {
        navigateWithBlocks('/hero-four');
        }, 5500);

        return () => clearTimeout(timer); // Clean up if user leaves early
    }, [navigateWithBlocks]);

  return (
    <div className={`${styles.container} py-3 flex flex-col relative overflow-hidden `}>
        <div className='px-2 sm:px-8 flex flex-col lg:flex-row lg:items-center justify-between z-3 '>
            <p className='font-superRichExpanded text-[#EC0303] lg:text-white text-[35px] lg:text-[69px] leading-4 lg:leading-8 animate-slideRight '>IT'S TIME<span className='font-baserona '>. . .</span></p>
            {/* web */}
            <img src='https://res.cloudinary.com/dumoghqlq/image/upload/v1795550469/globeRed_dcknmn.png' alt='icon' className='h-[50px] w-auto object-cover hidden lg:block animate-slideLeft ' />
            <img src='https://res.cloudinary.com/dumoghqlq/image/upload/v1795550469/globeRed_dcknmn.png' alt='icon' className='h-[50px] w-auto object-cover hidden lg:block animate-slideLeft ' />
            <img src='https://res.cloudinary.com/dumoghqlq/image/upload/v1795550469/globeRed_dcknmn.png' alt='icon' className='h-[50px] w-auto object-cover hidden lg:block animate-slideLeft ' />
            {/* mobile */}
            <div className='flex gap-1 lg:hidden w-full '>
                <img src='https://res.cloudinary.com/dumoghqlq/image/upload/v1795550471/globeWhite_avvcyj.png' alt='icon' className='h-[15px] w-auto object-cover animate-slideLeft ' />
                <img src='https://res.cloudinary.com/dumoghqlq/image/upload/v1795550471/globeWhite_avvcyj.png' alt='icon' className='h-[15px] w-auto object-cover animate-slideLeft ' />
                <img src='https://res.cloudinary.com/dumoghqlq/image/upload/v1795550471/globeWhite_avvcyj.png' alt='icon' className='h-[15px] w-auto object-cover animate-slideLeft ' />
                <img src='https://res.cloudinary.com/dumoghqlq/image/upload/v1795550471/globeWhite_avvcyj.png' alt='icon' className='h-[15px] w-auto object-cover animate-slideLeft ' />
                <img src='https://res.cloudinary.com/dumoghqlq/image/upload/v1795550471/globeWhite_avvcyj.png' alt='icon' className='h-[15px] w-auto object-cover animate-slideLeft ' />
            </div>
            
        </div>
        <div className='px-2 sm:px-8 flex flex-col lg:flex-row justify-between z-3 mt-2 lg:mt-0 '>
            <p className='font-baserona text-white lg:text-[#EC0303] text-justify text-[15px] lg:text-[32px] leading-3 max-w-30 animate-slideRight '>KEEP YOUR EYES ON THE</p>
            <p className='font-superRichExpanded text-[35px] leading-4 lg:text-[70px] lg:leading-7 text-[#EC0303] lg:text-white animate-slideLeft '>FINI<span className="[font-feature-settings:'liga']">S@3</span>H LINE</p>
        </div>

        <div className='px-2 sm:px-8 flex flex-col mt-5 animate-slideRight '>
            <div className='flex items-center relative'>
                <p className='font-baserona text-white lg:text-[#EC0303] text-left lg:text-justify text-[15px] lg:text-[32px] leading-3 max-w-25 lg:max-w-45 z-3 '>Not everyone will participate in the</p>
                <img src='https://res.cloudinary.com/dumoghqlq/image/upload/v1795550467/globe1_hvkmpd.png' className='hidden lg:block h-[70px] w-auto object-cover absolute top-0 lg:left-40 z-2 ' alt='icon'/>
                <img src='https://res.cloudinary.com/dumoghqlq/image/upload/v1795550470/globeRed2_scpabj.png' className='block lg:hidden h-[40px] w-auto object-cover absolute top-0 left-18 z-2 ' alt='icon'/>
            </div>
            <p className='font-superRichExpanded text-[35px] leading-2 text-[#EC0303] lg:text-[70px] lg:leading-5 lg:text-white z-3 '>P<span className="[font-feature-settings:'liga']">R@5</span>IX</p>
        </div>

        <div className='px-2 sm:px-8 flex flex-col items-end z-3 animate-slideLeft '>
            <p className='font-baserona text-white lg:text-[#EC0303] text-right text-[15px] lg:text-[32px] leading-2 lg:leading-3 max-w-15 lg:max-w-30 '>But those who do, will</p>
            <div className='flex items-center justify-end z-3 '>
                <img src='https://res.cloudinary.com/dumoghqlq/image/upload/v1795550467/globe1_hvkmpd.png' className='h-[35px] lg:h-[70px] w-auto object-cover ' alt='icon'/>
                <p className='font-baserona text-white lg:text-[#EC0303] text-right text-[15px] lg:text-[32px] leading-2 lg:leading-3 max-w-17 '>never forget</p>
            </div>
        </div>

        <div className='px-2 sm:px-8 flex items-center justify-center z-3 animate-slideRight '>
            <p className='hidden lg:block font-superRichExpanded text-white text-[70px] text-left leading-5 text-shadow-lg '>THE EXPERIEN<span className="[font-feature-settings:'liga']">C@4</span>E</p>
            <p className='block lg:hidden font-superRichExpanded text-[#EC0303] text-[30px] text-left leading-4 '>THE EXPERIENCE</p>
        </div>

        <div className='px-2 sm:px-8 flex items-center justify-end mt-auto z-3 '>
            <p className='font-superRichExpanded text-[15px] lg:text-[20px] text-white uppercase '>N<span className="[font-feature-settings:'liga']">C@4</span> ABUJA</p>
        </div>

        {/* car */}
        <div className='w-full h-[45%] sm:h-[70%] lg:h-auto absolute bottom-0 z-1 flex '>
            <img src='https://res.cloudinary.com/dumoghqlq/image/upload/v1795550476/smoke3_wfsacx.png' alt='car' className='lg:h-full lg:w-full object-cover [mask-image:linear-gradient(to_bottom,transparent_5px,black_10px)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_5px,black_10px)] h-full self-baseline object-[70%] lg:object-[100%] ' />
        </div>
    </div>
  )
}

export default Hero3