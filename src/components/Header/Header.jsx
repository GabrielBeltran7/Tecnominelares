import React, { useState } from "react";
import style from "./Header.module.css";
import { FaBars } from "react-icons/fa";



const Header = () => {
  const [menuOpen, setMenuOpen] = useState();

  const handleMenuItemClick = (open) => {
    // Cierra el menú al seleccionar un elemento
    if (open) setMenuOpen(false);
    if (!open) setMenuOpen(true);
  };

  return (
    <header>
      <nav className={style.nav}>
        <div className={style.navContainer}>
          <label
            htmlFor="menu"
            className={style.Label}
            onClick={() => handleMenuItemClick(menuOpen)}
          >
            <FaBars className={style.menuDesplegable} />
          </label>
          <input
            type="checkbox"
            id="menu"
            className={style.navInput}
            checked={menuOpen ? true : false}
          />
          <div
            className={`${style.navMenu} ${menuOpen ? `${style.open}` : ""}`}
          >
            <a className={style.navItem} href="/" onClick={handleMenuItemClick}>
              Inicio
            </a>
            <a
              className={style.navItem}
              href="/sobrenosotros"
              onClick={handleMenuItemClick}
            >
              Sobre Nosotros
            </a>
            <a
              className={style.navItem}
              href={"/inicio" ? "/#Servicios" : "/inicio/#Servicios"}
              onClick={handleMenuItemClick}
            >
              Servicios
            </a>
            <a
              className={style.navItem}
              href="/contactenos"
              onClick={handleMenuItemClick}
            >
              Contáctenos
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

// import style from "./Header.module.css";
// import Dropdown from "../Dropdown/DropdownComp";
// import { useState } from "react";
// import { FaBars } from "react-icons/fa";

// const Header = () => {
//   return (
//     <header>
//       <nav className={style.nav}>
//         <div className={style.navContainer}>
//           {/* <a href="/">
//             <img
//               src="https://res.cloudinary.com/dou3yyisb/image/upload/v1697084862/TecnoMateriales/logo_nvjh7f.png"
//               alt="Logo TecnoMinerales"
//               className={style.logoHeader}
//             />
//           </a> */}
//           <label for="menu" className={style.Label}>
//             <FaBars className={style.menuDesplegable} />
//           </label>
//           <input type="checkbox" id="menu" className={style.navInput} />
//           <div className={style.navMenu}>
//             <a className={style.navItem} href="/">
//               Inicio
//             </a>
//             <a className={style.navItem} href="/sobrenosotros">
//               Sobre Nosotros
//             </a>
//             <a className={style.navItem} href="#Servicios">
//               Servicios
//             </a>
//             <a className={style.navItem} href="/contactenos">
//               Contactenos
//             </a>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;
