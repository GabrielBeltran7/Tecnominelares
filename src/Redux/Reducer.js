/* eslint-disable no-unused-vars */
/* eslint-disable no-fallthrough */
import { GET_SERVICIOS, GET_SERVIVICIOS_ID } from "./ActionsTypes";
let inicialState = {
  servicios: [],
  serviciosId: [],
};
console.log("..................", inicialState);
const rootReducer = (state = inicialState, action) => {
  switch (action.type) {
    case GET_SERVICIOS:
      return {
        ...state,
        servicios: action.payload,
      };

    case GET_SERVIVICIOS_ID:
      return {
        ...state,
        serviciosId: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
