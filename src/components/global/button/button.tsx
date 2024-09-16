'use client'

// Import necessary libraries
import Link from 'next/link';
import { CSSProperties, useState, useEffect, useRef } from 'react';
import Style from './button.module.scss';
import Loader from './loader';

// Define props interface
interface PropsType {
  varient: string;
  lebel?: string;
  style?: CSSProperties;
  icon?: React.ReactElement;
  iconPosition?: 'left' | 'right';
  link?: string;
  loading?: boolean;
  onclick?: () => void;
}

// Define Button component
export default function Button({ varient, lebel, style, icon, iconPosition, link, onclick, loading }: PropsType) {
  // State variables for button interaction
  const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [circleScale, setCircleScale] = useState(0);

  const circleStyle = {
    left: pointerPosition.x - 5,
    top: pointerPosition.y - 5,
    transform: `scale(${circleScale})`,
  };

  // Ref for the button element
  const buttonRef = useRef<HTMLAnchorElement>(null);

  // Effect to calculate button position and update on resize
  useEffect(() => {
    const updateButtonPosition = () => {
      const button = buttonRef.current;
      if (button) {
        const rect = button.getBoundingClientRect();
        const offsetX = rect.left + rect.width / 2;
        const offsetY = rect.top + rect.height / 2;
        setPointerPosition({ x: offsetX, y: offsetY });
      }
    };

    updateButtonPosition();

    // Recalculate button position on window resize
    window.addEventListener('resize', updateButtonPosition);

    return () => {
      window.removeEventListener('resize', updateButtonPosition);
    };
  }, []);

  // Event handler for mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!buttonRef.current) return;
    setPointerPosition({
      x: e.clientX - buttonRef.current!.getBoundingClientRect().left - 5,
      y: e.clientY - buttonRef.current!.getBoundingClientRect().top - 5,
    });
    // Update circle scale based on hover position
    setCircleScale(isHovered ? 10 : 0);
  };

  // Event handler for mouse enter
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Event handler for mouse leave
  const handleMouseLeave = () => {
    setIsHovered(false);
    setCircleScale(0);
  };

  // Event handler for touch start
  const handleTouchStart = (e: React.TouchEvent<HTMLAnchorElement>) => {
    const touch = e.touches[0];
    if (!buttonRef.current) return;
    setPointerPosition({
      x: touch.clientX - buttonRef.current!.getBoundingClientRect().left - 5,
      y: touch.clientY - buttonRef.current!.getBoundingClientRect().top - 5,
    });
    setIsHovered(true);
    setCircleScale(10);
  };

  // Event handler for touch end
  const handleTouchEnd = () => {
    setIsHovered(false);
    setCircleScale(0);
  };

  // Function to get button class name based on varient
  const getClassName = (variant: string) => {
    switch (variant) {
      case 'primary':
        return `${Style.button} ${Style.primary}`;
      case 'secondary':
        return `${Style.button} ${Style.secondary}`;
      default:
        return `${Style.button} ${Style.default}`; // Use a default style if needed
    }
  };

  // Return JSX for Button component
  return (
    <Link
      href={link ? link : '/'}
      id="button"
      className={getClassName(varient)}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={onclick}
      ref={buttonRef}
    >
      {loading ? (
        <Loader />
      ) : (
        <>
          {iconPosition === 'left' && <div className={Style.icon}>{icon}</div>}
          <span className={Style.label}>{lebel}</span>
          <span className={`${Style.circle}`} style={circleStyle}></span>
          {iconPosition === 'right' && <div className={Style.icon}>{icon}</div>}
        </>
      )}
    </Link>
  );
}