// CustomCursor.js

import React, { useEffect, useState } from 'react';
import './splashCursor.scss';

const CustomCursor = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const circles = document.querySelectorAll('.circle');

    const colors = [
        '#111010', "#2d2d2d", "#4c4b4b", "#6c6b6b", "#8f8e8e", "#b3b2b2", "#d8d7d7", "#fffefe"
    ];

    circles.forEach(function (circle, index) {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });

    const handleMouseMove = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const animateCircles = () => {
    let x = coords.x;
    let y = coords.y;

    const circles = document.querySelectorAll('.circle');

    circles.forEach(function (circle, index) {
      circle.style.left = x - 12 + 'px';
      circle.style.top = y - 12 + 'px';

      circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

      circle.x = x;
      circle.y = y;

      const nextCircle = circles[index + 1] || circles[0];
      x += (nextCircle.x - x) * 0.3;
      y += (nextCircle.y - y) * 0.3;
    });

    requestAnimationFrame(animateCircles);
  };

  useEffect(() => {
    animateCircles();
  }, [coords]);

  return (
    <div className="custom-cursor">
      {/* Your HTML for the cursor circles */}
      {/* For example: */}
      <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  {/* <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
       */}
      {/* Add more circles as needed */}
    </div>
  );
};

export default CustomCursor;
