import React from 'react';
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';
import style from "./Footer.module.css"


const Footer = () => {
    return (
        <>
        <div className={style.containerprincipal}>
          <a href="#" ><FaFacebook /></a>
          <a href="#" ><FaYoutube /></a>
          <a href="#" ><FaTwitter /></a>
          <a href="#" ><FaInstagram /></a>
        </div>
        <div className={style.palasofrservice}>
          <a className={style.containerprincipal}>Sitio desarrollado por palasoft service Colombia +57 3213190211</a>
        </div>
        </>
      );
}

export default Footer