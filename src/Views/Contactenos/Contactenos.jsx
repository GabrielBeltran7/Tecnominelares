import style from "./Contactenos.module.css";
import FormularioContactenos from "../../components/formulariocontactenos/FormularioContactenos";
import Direccion from "../../components/Direccion/Direcion";
import Header from "../../components/Header/Header";

const Contactenos = () => {
  return (
    <div>
      <div className={style.header}>
        <Header />
      </div>
      <div className={style.contenedorprincipal}>
        <h2 className={style.titleContacto}>Contactenos</h2>
        <Direccion />
        <FormularioContactenos />
      </div>
    </div>
  );
};

export default Contactenos;
