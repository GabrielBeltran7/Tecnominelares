import { useDispatch, useSelector } from "react-redux";
import FuncionContactenos from "../../components/Funcioncontactenos/FuncionContactenos";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getServiciosId } from "../../Redux/Actions";
import style from "./Servicios.module.css";
import Header from "../../components/Header/Header";

const Servicios = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const servicios = useSelector((state) => state.serviciosId);
  console.log("servicioss", servicios);

  useEffect(() => {
    dispatch(getServiciosId(id));
  }, []);

  return (
    <div className={style.container}>
      <div className={style.containerHeader}>
        <Header />
      </div>
      <div className={style.containerInfo}>
        <h2 className={style.title}>{servicios.nombre}</h2>
        <div className={style.containerImage}>
          <img src={servicios.imagen} alt="" />
        </div>
        <p>{servicios.descripcion}</p>
        <FuncionContactenos />
      </div>
    </div>
  );
};

export default Servicios;
