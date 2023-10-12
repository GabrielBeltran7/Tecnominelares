import React from "react";
import { useSpring, animated } from "react-spring";
import style from "./Contador.module.css";

const Contador = ({ endValue }) => {
  const { number } = useSpring({
    from: { number: 0 },
    to: { number: endValue },
    config: { duration: 2000 }, // Duración de la animación en milisegundos
  });

  return (
    <animated.div className={style.divContador}>
      {number.to((val) => Math.floor(val))}
    </animated.div>
  );
};

export default Contador;
