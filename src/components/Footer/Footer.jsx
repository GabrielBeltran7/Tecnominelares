import React from "react";
import {
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={style.containerprincipal}>
        <a
          target="_blank"
          href="https://www.facebook.com/profile.php?id=61552676154728
"
        >
          <FaFacebook />
        </a>
        <a
          target="_blank"
          href="https://www.youtube.com/channel/UCrLxLIwek1LRaAv-PIqbWnw
"
        >
          <FaYoutube />
        </a>
        <a target="_blank" href="https://www.tiktok.com/@tecnominerales ">
          <FaTiktok />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/tecnominerales/
"
        >
          <FaInstagram />
        </a>
      </div>
      <div className={style.palasofrservice}>
        <a className={style.containerprincipal}>
          Sitio desarrollado por palasoft service Colombia +57 3213190211
        </a>
      </div>
    </>
  );
};

export default Footer;
