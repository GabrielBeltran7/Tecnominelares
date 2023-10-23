import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";
import FuncionContactenos from "../Funcioncontactenos/FuncionContactenos";
const Card = (props) => {
  const id = props.id;
  return (
    <article className={style.cardcontainer}>
      <div className={style.cardtitle}>
        <img src={props.imagen} className={style.image} alt="img" />
      </div>
      <div className={style.carddivisor} />
      <div className={style.cardinfo}>
        <h4>{props.nombre}</h4>
      </div>
      <div className={style.cardFooter}>
        <Link to={props.whatsapp} target="_blank">
          <FuncionContactenos className={style.FuncionContactenos} />
        </Link>
      </div>
    </article>
  );
};

export default Card;
