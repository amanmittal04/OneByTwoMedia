import React from 'react';

const Horizontal = () => {
  const scrollingTextStyles = {
    width: '100%',
    overflow: 'hidden',
    display: 'flex',
    whiteSpace: 'nowrap',
  };

  const textStyles = {
    fontSize: '80px',
    fontWeight: 700,
    textTransform: 'uppercase',
    color: 'transparent', // Make text transparent
    animation: 'animate_text 30s linear infinite',
    animationDirection: 'normal',
    width: '200%',
    // border: '4px solid #3A1240', // Add a border

    textShadow: '0 0 0 black', // Create the outline
  };

  const spanStyles = {
    margin: '0 40px',
  };

  return (
    <div style={scrollingTextStyles}>
      <style>
        {`
          @keyframes animate_text {
            from {
              transform: translate3d(0, 0, 0); /* Start from the right */
            }
            to {
              transform: translate3d(-100%, 0, 0); /* Scroll to the left */
            }
          }
        `}
      </style>
      <div className="text" style={textStyles}>
        <span style={spanStyles}>BRANDS</span>
        <span style={spanStyles}>CREATORS</span>
        <span style={spanStyles}>MARKETING</span>
      </div>
      <div className="text" style={textStyles}>
      <span style={spanStyles}>BRANDS</span>
        <span style={spanStyles}>CREATORS</span>
        <span style={spanStyles}>MARKETING</span>
    
      </div>
    </div>
  );
};

export default Horizontal;
