import React from 'react';
import './logo.css';

const Logo = () => {
  return (
    <header className="logo">
      <div className="image">
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" />
        
      </div>
      
      
   
    </header>
  );
};

export default Logo;