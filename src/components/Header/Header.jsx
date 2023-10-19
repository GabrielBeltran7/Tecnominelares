import { useSelector } from "react-redux";
import style from "./Header.module.css";
import Dropdown from "../Dropdown/DropdownComp";

const Header = () => {
  return (
    <header>
      <nav class="animate__animated animate__fadeIn">
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
