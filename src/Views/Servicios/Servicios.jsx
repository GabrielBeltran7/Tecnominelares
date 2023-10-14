import { useDispatch, useSelector } from "react-redux";
import  FuncionContactenos from "../../components/Funcioncontactenos/FuncionContactenos";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getServicios } from "../../Redux/Actions";

const Servicios = () => {
  const dispatch = useDispatch()

  const {id} = useParams()
  const servicioId = parseInt(id, 10)
  
useEffect(()=>{
  dispatch(getServicios())
})


  const servicios = useSelector((state)=>state.servicios)

  const serviciosfilter = servicios.find((servicios)=> servicios.id === servicioId)
 
  return (
    <div>
      <p>{serviciosfilter.nombre}</p>
   <img src={serviciosfilter.imagen} alt="" />
   <p>{serviciosfilter.descripcion}</p>
     
    </div>
  );
};

export default Servicios;

