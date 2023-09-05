// CustomCursor.js

import React, { useEffect, useState } from 'react';
import '../cursor/customcursor.scss';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    const cursor = document.querySelector('.cursor');

    const handleMouseMove = (e) => {
      setPosition({ x: e.pageX, y: e.pageY });
    };

    const handleMouseClick = () => {
      setExpand(true);
      setTimeout(() => {
        setExpand(false);
      }, 500);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleMouseClick);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleMouseClick);
    };
  }, []);

  return (
    <div
      className={`cursor ${expand ? 'expand' : ''}`}
      style={{ top: `${position.y - 10}px`, left: `${position.x - 10}px` }}
    ></div>
  );
};

export default CustomCursor;
