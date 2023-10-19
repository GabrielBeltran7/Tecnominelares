import style from "./Header.module.css";
import Dropdown from "../Dropdown/DropdownComp";
import { useState } from "react";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header>
      <nav className={`animate__animated animate__fadeIn `}>
        <a href="/">
          <img
            src="https://res.cloudinary.com/dou3yyisb/image/upload/v1697084862/TecnoMateriales/logo_nvjh7f.png"
            alt=""
          />
        </a>

        <ul>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/sobrenosotros">Sobre nosotros</a>
          </li>
          <li>
            <Dropdown />
          </li>
          <li>
            <a href="/contactenos">Contactenos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
