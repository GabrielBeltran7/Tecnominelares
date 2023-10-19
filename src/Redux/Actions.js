/* eslint-disable no-unused-vars */
import { GET_SERVICIOS, GET_SERVIVICIOS_ID } from "./ActionsTypes";
import servicios from "./Servicios";

export const getServicios = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_SERVICIOS,
        payload: servicios,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const getServiciosId = (id) => {
  return async (dispatch) => {
    const servicio = servicios.find((servicio) => servicio.id == id);
    if (servicio) {
      dispatch({
        type: GET_SERVIVICIOS_ID,
        payload: servicio,
      });
    }
  };
};
