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
  <Carousel autoplay effect="fade">
    <div className={style.image}>
      <h3></h3>
    </div>
    <div>
      <h3 className={style.imageDos}></h3>
    </div>
    <div>
      <h3 className={style.imageTres}></h3>
    </div>
    <div>
      <h3 className={style.imageCuatro}></h3>
    </div>
  </Carousel>
);
export default Carrousel;
