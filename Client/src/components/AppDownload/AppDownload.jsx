import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";
import {Link} from 'react-router-dom'


const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        For Better Experience Download
        <br />
        Our mobile App
      </p>
      <div className="app-download-platforms">
        <a href="https://play.google.com/store/games?hl=en&pli=1"><img src={assets.play_store} alt="app-download-android" /></a>
        <a href="https://www.apple.com/in/app-store/"><img src={assets.app_store} alt="app-download-ios" /></a>
      </div>
    </div>
  );
};

export default AppDownload;
