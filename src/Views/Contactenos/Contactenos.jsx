import style from "./Contactenos.module.css";
import FormularioContactenos from "../../components/formulariocontactenos/FormularioContactenos";
import Direccion from "../../components/Direccion/Direcion";

const Contactenos = () => {
  return (
    <div className={style.contenedorprincipal}>
      <Direccion />
      <FormularioContactenos />
    </div>
  );
};

export default Contactenos;
