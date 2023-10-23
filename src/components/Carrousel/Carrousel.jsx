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
  <Carousel effect="fade" autoplay className={style.carrousel}>
    <div className={style.image}>
      <img
        src="https://res.cloudinary.com/dou3yyisb/image/upload/v1697073792/TecnoMateriales/maquinaria8-ia_gcsmno.jpg"
        alt=""
      />
    </div>

    <div className={style.imageDos}>
      <img
        src="https://res.cloudinary.com/dou3yyisb/image/upload/v1697073795/TecnoMateriales/maquinaria9-ia_ojklf4.jpg"
        alt=""
      />
    </div>
    <div className={style.imageTres}>
      <img
        src="https://res.cloudinary.com/dou3yyisb/image/upload/v1697073796/TecnoMateriales/maquinaria7-ia_rxoygj.jpg"
        alt=""
      />
    </div>
    <div className={style.imageCuatro}>
      <img
        src="https://res.cloudinary.com/dou3yyisb/image/upload/c_pad,b_gen_fill,w_1920,h_1080,ar_16:9,e_improve,e_sharpen/v1697748217/TecnoMateriales/WhatsApp_Image_2023-10-06_at_6.29.02_PM_dbqfs8.jpg"
        alt=""
      />
    </div>
    <div className={style.imageCinco}>
      <img
        src="https://res.cloudinary.com/dou3yyisb/image/upload/v1697748218/TecnoMateriales/WhatsApp_Image_2023-10-06_at_6.29.03_PM_2_bisw1e.jpg"
        alt=""
      />
    </div>
    <div className={style.imageSeis}>
      <img
        src="https://res.cloudinary.com/dou3yyisb/image/upload/v1697748223/TecnoMateriales/WhatsApp_Image_2023-10-10_at_9.34.22_PM_2_hkjulh.jpg"
        alt=""
      />
    </div>
    <div className={style.imageSiete}>
      <img
        src="https://res.cloudinary.com/dou3yyisb/image/upload/c_pad,b_gen_fill,w_1280,h_720,ar_16:9,e_improve,e_sharpen/v1697748216/TecnoMateriales/WhatsApp_Image_2023-10-06_at_6.29.01_PM_2_dxp7cx.jpg"
        alt=""
      />
    </div>
    <div className={style.imageOcho}>
      <img
        src="https://res.cloudinary.com/dou3yyisb/image/upload/c_pad,b_gen_fill,w_1280,h_720,ar_16:9,e_improve,e_sharpen/v1697748216/TecnoMateriales/WhatsApp_Image_2023-10-06_at_6.29.01_PM_wegtan.jpg"
        alt=""
      />
    </div>
  </Carousel>
);

export default Carrousel;
