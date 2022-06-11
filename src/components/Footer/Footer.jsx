import React from 'react'
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="spain">Spain</div>
      <div className="lastbar">
        <div className='about'>
          <a href="">About </a>
          <a href="">Advertising </a>
          <a href="">Business </a>
          <a href="">How search works </a>
        </div>
        <div className="privacy">
          <a href="">Privacy</a>
          <a href="">Terms </a>
          <a href="">Settings </a>
        </div>
      </div>
    </div>
  );
}
