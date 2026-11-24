import React from 'react'
import { X } from 'lucide-react';

const ModalPopup = ({ isOpen, onClose, src, top, left, right, bottom, width, height, mwidth, mheight, title, text }) => {
    if (!isOpen) return null;

    const closeModal = (e) => {
        // if (e.target !== e.currentTarget) return;
        onClose();
    };
    const formatVal = (val) => {
        if (val === undefined || val === null) return 'auto';
        return typeof val === 'number' ? `${val}px` : val;
    };
  return (
    <div className="fixed w-full h-full flex flex-col inset-0 bg-[#0000005d] z-500">
        <div onClick={closeModal} className='p-1 self-end bg-white m-2 cursor-pointer pointer-events-auto '>
            <X color='#EC0303' />
        </div>
        <div
            className="hidden absolute p-2 bg-white rounded shadow-lg lg:flex flex-col justify-around "
            style={{ top, left, right, bottom }}
        >
            <img
                src={src}
                alt="Modal preview"
                className="object-cover"
                style={{ width, height }}
            />
            <p className='text-[24px] text-[#EC0303] font-baserona pt-1 ' style={{ width }} >{title}</p>
            <p className='text-[16px] text-black font-artegraLight uppercase ' style={{ width }} >{text}</p>
        </div>
        {/* mobile */}
        <div
            className="lg:hidden absolute p-1 bg-white rounded shadow-lg flex flex-col justify-around w-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
        >
            <img
                src={src}
                alt="Modal preview"
                className="object-cover min-w-0 max-w-none shrink-0 w-[var(--width)] h-[var(--height)] "
                style={{
                    '--width': formatVal(mwidth),
                    '--height': formatVal(mheight),
                }}
            />
            <p className='text-[16px] text-[#EC0303] font-baserona pt-1 w-[var(--width)] ' style={{ '--width': formatVal(mwidth) }} >{title}</p>
            <p className='text-[14px] text-black font-artegraLight uppercase w-[var(--width)] ' style={{ '--width': formatVal(mwidth) }} >{text}</p>
        </div>
    </div>
  )
}

export default ModalPopup