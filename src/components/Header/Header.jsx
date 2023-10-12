import style from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <nav>
        <img
          src="https://res.cloudinary.com/dou3yyisb/image/upload/v1697084862/TecnoMateriales/logo_nvjh7f.png"
          alt=""
        />
        <ul>
          <li>Inicio</li>
          <li>Sobre nosotros</li>
          <li>Servicios</li>
          <li>Certificaciones</li>
          <a href="/contactenos">Contacnenos</a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
