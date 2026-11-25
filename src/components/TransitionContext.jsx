import React, { Children } from 'react'
import { useState, useMemo, useRef, useContext, createContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styles from '../hero/hero1/hero1.module.css'

const TransitionContext = createContext();

export function TransitionProvider ({ children }) {
  const [isActive, setIsActive] = useState(false);
  const activeRef = useRef(false); 
  const navigate = useNavigate();
  const location = useLocation();
    
  const blocks = useMemo(() => {
    return Array.from({ length: 40}, (_, index) => ({
      id: index,
      delay: `${(Math.random() * 0.5).toFixed(3)}s`
    }))
  }, []); 
  const runWithBlocks = (action) => {
    if (activeRef.current) return false;
    activeRef.current = true;
    setIsActive(true);
    setTimeout(() => {
      action();
      window.scrollTo(0, 0);
    }, 700);

    setTimeout(() => {
      setIsActive(false);
      activeRef.current = false;
    }, 1350);

    return true;
  };

  const navigateWithBlocks = (to, options) => {
    if (location.pathname === to) return;
    runWithBlocks(() => navigate(to, options));
  };

  return (
    <TransitionContext.Provider value={{ navigateWithBlocks, runWithBlocks }}>
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