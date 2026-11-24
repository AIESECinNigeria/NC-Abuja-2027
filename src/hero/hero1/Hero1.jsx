import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useBlockTransition } from '../../components/TransitionContext'
import ModalPopup from '../../components/ModalPopup';
import ModalPopupB from '../../components/ModalPopUpB';
import { ChevronsRight } from 'lucide-react';
import styles from './hero1.module.css'

const Hero1 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalBOpen, setIsModalBOpen] = useState(false);
  const { navigateWithBlocks } = useBlockTransition();

  const handleLinkClick = (e, path) => {
    if (e.metaKey || e.ctrlKey) return;
    e.preventDefault();
    navigateWithBlocks(path);
  };

  return (
    <div className={`${styles.container} py-4 flex flex-col relative overflow-hidden z-3 `}>
      {/* red banner */}
      <div className='bg-linear-to-r from-[#EC0303] to-[#3F0909] py-1 px-2 sm:px-4 flex justify-between items-center text-white text-[20px] z-3 '>
        <p className='font-artegraLight '>PURPOSE</p>
        <ChevronsRight className="w-3 h-3 shrink-0" strokeWidth={1.5} aria-hidden="true" />
        <p className='font-artegraLight '>IN</p>
        <ChevronsRight className="w-3 h-3 shrink-0" strokeWidth={1.5} aria-hidden="true" />
        <p className='font-artegraLight '>MOTION</p>
      </div>

      {/* first text */}
      <div className='max-w-33 sm:max-w-100 px-2 sm:px-4 py-2 whitespace-pre-wrap text-white text-[15px] text-justify sm:text-[32px] font-baserona z-3 '>
        <p>For those strong enough to keep their eyes and mind on the <span className='text-[#EC0303]'>purpose</span> while moving with <span className='text-[#EC0303]'>speed.</span></p>
        {/* <p>For   those   strong   enough   to   keep   their   eyes   and   mind   on   the   purpose   while   moving   with   speed.</p> */}
      </div>

      {/* second text */}
      <div className='pr-2 sm:pr-4 flex flex-col items-end'>
        <div className='flex items-center '>
          <img src='https://res.cloudinary.com/dumoghqlq/image/upload/v1795550467/globe1_hvkmpd.png' alt='icon' className='h-[25px] sm:h-[75px] w-auto object-contain '/>
          <p className='font-superRichExpanded text-[35px] sm:text-[70px] text-[#EC0303] leading-4 sm:leading-7 '>GOT</p>
        </div>
        <div className='flex items-center '>
          <p className='font-superRichExpanded text-[35px] sm:text-[70px] text-[#EC0303] leading-4 sm:leading-7 '>WHAT</p>
        </div>
        <div className='flex items-center '>
          <img src='https://res.cloudinary.com/dumoghqlq/image/upload/v1795550468/globe2_fyh8c2.png' alt='icon' className='h-[25px] sm:h-[75px] w-auto object-contain '/>
          <p className='font-superRichExpanded text-[35px] sm:text-[70px] text-[#EC0303] leading-4 sm:leading-7 '>IT</p>
        </div>
        <div className='flex items-center '>
          <p className='font-superRichExpanded text-[35px] sm:text-[70px] text-[#EC0303] leading-4 sm:leading-7 '>TAKES</p>
        </div>
      </div>

      {/* bottom */}
      <div className='px-2 sm: px-4 mt-auto z-3 '>
        {/* nc abuja */}
        <p className='font-superRichExpanded text-[20px] text-white uppercase '>N<span className="[font-feature-settings:'liga']">C@4</span> ABUJA</p>
        <div className='mt-3 flex items-center gap-0 h-[49px] lg:h-[70px] w-full '>
          <img src='https://res.cloudinary.com/dumoghqlq/image/upload/v1795550465/cta_feffmn.png' alt='flag' className='hidden lg:block object-cover h-[70px] ' />
          <img src='https://res.cloudinary.com/dumoghqlq/image/upload/v1795550465/ctamob_rcxiax.png' alt='flag' className='block lg:hidden object-cover h-[49px] ' />
          <Link to='/hero-two' onClick={(e) => handleLinkClick(e, '/hero-two')} className='bg-[#EC0303] hover:bg-white h-full w-full p-1 flex items-center justify-center text-white hover:text-[#EC0303] text-[16px] lg:text-[24px] font-baserona font-light '>
            GET ON THE GRID
          </Link>
        </div>
      </div>

      {/* car */}
      <div className='h-55 lg:h-auto absolute bottom-0 z-1 '>
        <img src='https://res.cloudinary.com/dumoghqlq/image/upload/v1795551370/carimg_qr1mx3.png' alt='car' className='h-[100%] lg:h-auto w-full lg:w-[80%] object-cover object-[90%] lg:object-left animate-slideUp ' />
      </div>

      <div className='absolute w-full h-full z-7 inset-0 pointer-events-none flex flex-col justify-evenly '>
        <div onClick={() => setIsModalOpen(true)} className='p-1 w-1 h-1 bg-white/20 rounded-full ring-1 ring-white self-start ml-2 sm:ml-10 animate-pulse cursor-pointer pointer-events-auto ' ></div>
        <div onClick={() => setIsModalBOpen(true)} className='p-1 w-1 h-1 bg-white/20 rounded-full ring-1 ring-white self-end mr-2 sm:mr-10 animate-pulse cursor-pointer pointer-events-auto ' ></div>
      </div>
      <ModalPopup
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        src="https://res.cloudinary.com/dumoghqlq/image/upload/v1795563023/popUp1_wudxo5.png"
        top={40}
        left={400}
        width={400}
        height={550}
        mwidth={280}
        mheight={280}
        title="PURPOSE IN MOTION"
        text="This is where individual journeys meet collective momentum."
      />
      <ModalPopupB
        isOpen={isModalBOpen}
        onClose={() => setIsModalBOpen(false)}
        src="https://res.cloudinary.com/dumoghqlq/image/upload/v1795563026/popUp2_avepxy.png"
        top={40}
        right={400}
        width={400}
        height={280}
        mwidth={280}
        mheight={400}
        title="THE CAPITAL"
        text="Abuja is more than the host city. It is the meeting point for leaders from across AIESEC in Nigeria."
      />
      

    </div>
  )
}

export default Hero1