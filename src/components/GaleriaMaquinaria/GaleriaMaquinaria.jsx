import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function GaleriaMaquinaria() {
  return (
    <ImageList
      sx={{ width: 500, height: 450, marginBottom: 5 }}
      cols={3}
      rowHeight={164}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://res.cloudinary.com/dou3yyisb/image/upload/v1697748232/TecnoMateriales/WhatsApp_Image_2023-10-06_at_6.29.01_PM_1_evamj3.jpg",
    title: "Maquinaria",
  },
  {
    img: "https://res.cloudinary.com/dou3yyisb/image/upload/v1697748232/TecnoMateriales/WhatsApp_Image_2023-10-06_at_6.29.00_PM_epxn0r.jpg",
    title: "Maquinaria 2",
  },
  {
    img: "https://res.cloudinary.com/dou3yyisb/image/upload/v1697748227/TecnoMateriales/WhatsApp_Image_2023-10-06_at_6.28.53_PM_hcelxz.jpg",
    title: "Maquinaria 3",
  },
  {
    img: "https://res.cloudinary.com/dou3yyisb/image/upload/v1697748226/TecnoMateriales/WhatsApp_Image_2023-10-06_at_6.28.51_PM_ygxe8b.jpg",
    title: "Maquinaria 4",
  },
  {
    img: "https://res.cloudinary.com/dou3yyisb/image/upload/v1697748225/TecnoMateriales/WhatsApp_Image_2023-10-06_at_6.28.51_PM_1_isptl1.jpg",
    title: "Maquinaria 5",
  },
  {
    img: "https://res.cloudinary.com/dou3yyisb/image/upload/v1697748225/TecnoMateriales/WhatsApp_Image_2023-10-06_at_6.28.49_PM_1_jlyise.jpg",
    title: "Maquinaria 6",
  },
  {
    img: "https://res.cloudinary.com/dou3yyisb/image/upload/v1697748223/TecnoMateriales/WhatsApp_Image_2023-10-10_at_9.34.22_PM_2_hkjulh.jpg",
    title: "Maquinaria 7",
  },
  {
    img: "https://res.cloudinary.com/dou3yyisb/image/upload/v1697748221/TecnoMateriales/WhatsApp_Image_2023-10-06_at_6.29.04_PM_bzsy3l.jpg",
    title: "Maquinaria 8",
  },
  {
    img: "https://res.cloudinary.com/dou3yyisb/image/upload/v1697748221/TecnoMateriales/WhatsApp_Image_2023-10-06_at_6.29.04_PM_2_hybwtv.jpg",
    title: "Maquinaria 9",
  },
  {
    img: "https://res.cloudinary.com/dou3yyisb/image/upload/v1697748220/TecnoMateriales/WhatsApp_Image_2023-10-06_at_6.29.04_PM_1_bsxxy7.jpg",
    title: "Maquinaria 10",
  },
  {
    img: "https://res.cloudinary.com/dou3yyisb/image/upload/v1697748218/TecnoMateriales/WhatsApp_Image_2023-10-06_at_6.29.03_PM_2_bisw1e.jpg",
    title: "Maquinaria 11",
  },
  {
    img: "https://res.cloudinary.com/dou3yyisb/image/upload/v1697748216/TecnoMateriales/WhatsApp_Image_2023-10-06_at_6.29.01_PM_3_vyjeam.jpg",
    title: "Maquinaria 12",
  },
  {
    img: "https://res.cloudinary.com/dou3yyisb/image/upload/v1697748216/TecnoMateriales/WhatsApp_Image_2023-10-06_at_6.29.01_PM_2_dxp7cx.jpg",
    title: "Maquinaria 13",
  },
];
