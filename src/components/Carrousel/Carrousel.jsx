import React from "react";
import { Carousel } from "antd";
import style from "./Carrousel.module.css";
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const Carrousel = () => (
  <Carousel autoplay effect="fade" className={style.carrousel}>
    <div className={style.image}>
      <img
        src="https://res.cloudinary.com/dou3yyisb/image/upload/v1697084862/TecnoMateriales/logo_nvjh7f.png"
        alt=""
        width="100px"
      />
      <h3>
        TECNO<span>MINERALES</span>
      </h3>
      <p>Arenas & Gravas</p>
    </div>

    <div className={style.imageDos}>
      <img
        src="https://res.cloudinary.com/dou3yyisb/image/upload/v1697084862/TecnoMateriales/logo_sin_fondo_qhdxvn.png"
        alt=""
        width="350px"
      />
    </div>
    <div className={style.imageTres}>
      <img
        src="https://res.cloudinary.com/dou3yyisb/image/upload/v1697084862/TecnoMateriales/logo_sin_fondo_qhdxvn.png"
        alt=""
        width="350px"
      />
    </div>
    <div className={style.imageCuatro}>
      <img
        src="https://res.cloudinary.com/dou3yyisb/image/upload/v1697084862/TecnoMateriales/logo_sin_fondo_qhdxvn.png"
        alt=""
        width="350px"
      />
    </div>
    <div className={style.imageCinco}>
      <img
        src="https://res.cloudinary.com/dou3yyisb/image/upload/v1697084862/TecnoMateriales/logo_sin_fondo_qhdxvn.png"
        alt=""
        width="350px"
      />
    </div>
    <div className={style.imageSeis}>
      <img
        src="https://res.cloudinary.com/dou3yyisb/image/upload/v1697084862/TecnoMateriales/logo_sin_fondo_qhdxvn.png"
        alt=""
        width="350px"
      />
    </div>
    <div className={style.imageSiete}>
      <img
        src="https://res.cloudinary.com/dou3yyisb/image/upload/v1697084862/TecnoMateriales/logo_sin_fondo_qhdxvn.png"
        alt=""
        width="350px"
      />
    </div>
    <div className={style.imageOcho}>
      <img
        src="https://res.cloudinary.com/dou3yyisb/image/upload/v1697084862/TecnoMateriales/logo_sin_fondo_qhdxvn.png"
        alt=""
        width="350px"
      />
    </div>
  </Carousel>
);

export default Carrousel;
