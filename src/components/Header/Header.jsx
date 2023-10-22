import style from "./Header.module.css";
import Dropdown from "../Dropdown/DropdownComp";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <nav className={style.nav}>
        <div className={style.navContainer}>
          <a href="/">
            <img
              src="https://res.cloudinary.com/dou3yyisb/image/upload/v1697084862/TecnoMateriales/logo_nvjh7f.png"
              alt="Logo TecnoMinerales"
              className={style.logoHeader}
            />
          </a>
          <label for="menu" className={style.Label}>
            <FaBars className={style.menuDesplegable} />
          </label>
          <input type="checkbox" id="menu" className={style.navInput} />
          <div className={style.navMenu}>
            <a className={style.navItem} href="/">
              Inicio
            </a>
            <a className={style.navItem} href="/sobrenosotros">
              Sobre Nosotros
            </a>
            <Dropdown className={style.navItem} />
            <a className={style.navItem} href="/contactenos">
              Contactenos
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
