import React, { Children } from 'react'
import { useState, useMemo, useContext, createContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styles from '../hero/hero1/Hero1.module.css'

const TransitionContext = createContext();

export function TransitionProvider ({ children }) {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
    
  const blocks = useMemo(() => {
    return Array.from({ length: 40}, (_, index) => ({
      id: index,
      delay: `${(Math.random() * 0.5).toFixed(3)}s`
    }))
  }, []); //this is so that each of the 40 blocks can each delay by different seconds

  const navigateWithBlocks = (to) => {
    if (location.pathname === to || isActive) return; //
    setIsActive(true)

    //changing the route while the screen is covered in blocks
    setTimeout(() => {
      navigate(to);
      window.scrollTo(0,0);
    }, 700)

    //revealing the new page after the page has been navigated to.
    setTimeout(() => {
      setIsActive(false);
    }, 1350);
  }

  return (
    <TransitionContext.Provider value={{ navigateWithBlocks }}>
      {children}
      
      {/* the blocks */}
      <div className={`${styles.gridOverlay} ${isActive ? styles.active :''}`}>
        {blocks.map((block) => (
          <div
            key={block.id}
            className={`${styles.cell}`}
            style={{ '--delay': block.delay }}
          />
        ))}
      </div>
    </TransitionContext.Provider>
  )
}

export const useBlockTransition = () => useContext(TransitionContext);