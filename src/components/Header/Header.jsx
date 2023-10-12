import style from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <nav>
        <img
          src="https://static.vecteezy.com/system/resources/previews/006/458/053/non_2x/excavator-cartoon-colored-vehicle-illustration-free-vector.jpg"
          alt=""
        />
        <ul>
          <li>Inicio</li>
          <li>Sobre nosotros</li>
          <li>Servicios</li>
          <li>Certificaciones</li>
          <li>
            <a href="/contacto">contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
