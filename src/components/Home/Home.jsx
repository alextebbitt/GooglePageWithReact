import React from 'react'
import "./Home.css";

export const Home = ({ microphone,search }) => {
    console.log('the images is' + microphone)
  return (
    <div className="main-container">
      <img
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        alt=""
      ></img>
      <br />
      <br />
      <span className="input-container">
        <img className="search" src={search} alt=""></img>
        <input type="text" name="" className="textbar" />
        <img className="microphone" src={microphone} alt="" height={24}></img>
      </span>
      <div />
      <span className="buttons-container">
        <button>Google Search </button>
        <button>I'm feeling lucky</button>
      </span>
      <div className="language-container" />
      <span>
        Google offered in:
        <a href="">Español </a>
        <a href="">català </a>
        <a href="">galego </a>
        <a href="">euskara </a>
      </span>
    </div>
  );
}
