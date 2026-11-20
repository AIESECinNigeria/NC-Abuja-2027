import React from 'react'
import styles from './Hero4.module.css'
import { Link } from 'react-router-dom'
import { useBlockTransition } from '../../components/TransitionContext';

const Hero4 = () => {
    
    const { navigateWithBlocks } = useBlockTransition();

    const handleLinkClick = (e, path) => {
    if (e.metaKey || e.ctrlKey) return;
    e.preventDefault();
    navigateWithBlocks(path);
    };

  return (
    <div className={`${styles.container} py-3 flex flex-col relative overflow-hidden `}>
        <div className='w-full flex flex-col z-3 '>
            <p className='hidden sm:block w-full px-2 sm:px-3 lg:px-8 lg:whitespace-pre-wrap font-baserona text-[#EC0303] text-[14px] sm:text-[18px] lg:text-[27px] leading-2 lg:leading-3 '>Wins   and   loses   do   not   define   this   championship,</p>
            <p className='sm:hidden w-full px-2 sm:px-3 lg:px-8 lg:whitespace-pre-wrap font-baserona text-[#EC0303] text-[14px] sm:text-[18px] lg:text-[27px] leading-2 lg:leading-3 '>Wins   and   loses   do   not   define   this   championship, making   sure   every   driver   continues   their</p>
            <div className='flex items-center px-2 sm:px-3 lg:px-8 '>
                <div>
                    <p className='hidden sm:block w-full lg:whitespace-pre-wrap font-baserona text-[#EC0303] text-[14px] sm:text-[17px] lg:text-[27px] leading-2 lg:leading-3 '>making   sure   every   driver   continues   their</p>
                    <p className='w-full lg:whitespace-pre-wrap font-baserona text-white text-[14px] sm:text-[17px] lg:text-[27px] leading-2 lg:leading-3 '>motion  {">>"}  in  {">>"}  purpose  is  the  only  outcome.</p>
                </div>
                <img src='/images/ctaGrey.png' className='h-[25px] sm:h-[25px] lg:h-5 ' alt='icon' />
            </div>
        </div>

        <div className='px-2 sm:px-4 lg:px-8 z-3 mt-10 '>
            <p className='w-full font-baserona text-white lg:text-[#EC0303] text-[15px] sm:text-[17px] lg:text-[32px] leading-2 '>READY TO JOIN</p>
            <div className='flex items-center lg:gap-1 '>
                <p className='font-superRichExpanded text-[#EC0303] lg:text-white text-[35px] sm:text-[65px] lg:text-[70px] leading-4 sm:leading-5 '>THE</p>
                {/* web */}
                <img src='/images/globeRed3.png' alt='icon' className='hidden lg:block h-[60px] w-auto object-cover ' />
                {/* mobile */}
                <img src='/images/globe1.png' alt='icon' className='lg:hidden h-[35px] w-auto object-cover ' />
                {/* web */}
                <p className='hidden lg:block font-superRichExpanded text-[#EC0303] lg:text-white text-[35px] lg:text-[70px] leading-4 lg:leading-5 '>P</p>
                <img src='/images/rrr.png' alt='icon' className='hidden lg:block h-[45px] w-auto object-cover ' />
                <p className='hidden lg:block font-superRichExpanded text-[#EC0303] lg:text-white text-[35px] lg:text-[70px] leading-4 lg:leading-5 '>IX</p>
            </div>
            {/* mobile */}
            <div className='lg:hidden flex items-center gap-0 '>
                <p className='font-superRichExpanded text-[#EC0303] lg:text-white text-[35px] sm:text-[65px] leading-4 sm:leading-5 '>P</p>
                <img src='/images/redrrr.png' alt='icon' className='h-[24px] sm:h-[40px] w-auto object-cover ' />
                <p className='font-superRichExpanded text-[#EC0303] lg:text-white text-[35px] sm:text-[65px] leading-4 sm:leading-5 '>IX</p>
            </div>
            
        </div>

        <div className='px-2 sm:px-4 lg:px-8 flex items-center justify-start mt-4 sm:mt-7 lg:mt-auto z-3 '>
            <p className='font-superRichExpanded text-[15px] lg:text-[20px] text-white uppercase '>N<span className="[font-feature-settings:'liga']">C@4</span> ABUJA</p>
        </div>

        <div className='px-2 sm:px-4 lg:px-8 mt-auto z-3 '>
            <div className='mt-3 flex items-center gap-0 h-[49px] lg:h-[70px] w-full '>
            <img src='/images/ctaWhite.png' alt='flag' className='hidden lg:block object-cover h-[70px] ' />
            <img src='/images/ctawSmall.png' alt='flag' className='block lg:hidden object-cover h-[49px] ' />
            <Link to='/hero-two' onClick={(e) => handleLinkClick(e, '/hero-two')} className='hover:bg-[#EC0303] bg-white h-full w-full p-1 flex items-center justify-center hover:text-white text-[#EC0303] text-[16px] lg:text-[24px] font-baserona font-light '>
                START RACE
            </Link>
            </div>
        </div>

        {/* car */}
        <div className='w-full h-[50%] lg:h-[70%] absolute bottom-0 z-1 flex '>
            <img src='/images/smoke4.png' alt='car' className='lg:h-full lg:w-full object-cover [mask-image:linear-gradient(to_bottom,transparent_1px,black_3px)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_1px,black_3px)] h-full self-baseline ' />
        </div>
    </div>
  )
}

export default Hero4