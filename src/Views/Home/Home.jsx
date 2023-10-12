import style from "./Home.module.css";
import Header from "../../components/Header/Header";
import Contador from "../../components/Contador/Contador";
import Carrousel from "../../components/Carrousel/Carrousel";
import { useState, useEffect } from "react";


const Home = () => {
  const [mostrarContador, setMostrarContador] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMostrarContador(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={style.container}>
      <div className={style.title}>
        <Header />
        <h2>
          Tecno<span>Materiales</span>{" "}
        </h2>
        <p>Arenas & Gravas</p>
        <div className={style.containerImages}>
          <div>
            <img
              src="https://res.cloudinary.com/dou3yyisb/image/upload/v1697035700/TecnoMateriales/sello_ceritifcacion-removebg-preview_or5q5a.png"
              alt="Car Certificado"
            />
            <img
              src="https://res.cloudinary.com/dou3yyisb/image/upload/v1697035700/TecnoMateriales/la_car-removebg-preview_qusgdz.png"
              alt="CAR logo"
            />
          </div>
          <div>
            <p>Nit: 901.674.891-6</p>
            <p>Registro CAR Nro. 59</p>
          </div>
        </div>
        <div className={style.contadores}>
          <div className={style.contador}>
            <p>
              +{mostrarContador && <Contador endValue={150} />} clientes
              satisfechos
            </p>
          </div>

          <div className={style.contador}>
            <p>
              +{mostrarContador && <Contador endValue={15} />} Años en la
              industria
            </p>
          </div>
          <div className={style.contador}>
            <p>
              +{mostrarContador && <Contador endValue={500} />}Trabajos
              realizados
            </p>
          </div>
        </div>
      </div>
      <div className={style.subTitulo}>
        <h2>Nuestra maquinaria</h2>
      </div>
      <div className={style.contCarrousel}>
        <Carrousel />
      </div>
      <div className={style.subTitulo}>
        <h2>Beneficios</h2>
      </div>
      <div className={style.containerBeneficios}>
        <div className={style.beneficios}>
          <div>
            <h4>Certificación</h4>
            <p>
              Certificamos la disposición de sus escombros de forma rápida y
              segura.
            </p>
          </div>
          <div>
            <h4>Regulación</h4>
            <p>
              Estamos avalados por la Secretaria Dstrital de Ambiente con el pin
              xxxx-xx-xxxx
            </p>
          </div>
          <div>
            <h4>Cumplimiento</h4>
            <p>
              Aseguramos la adecuada disposición de los materiales para el
              cuidado del medio ambiente, autorizados con la resolución xxxx/xx
            </p>
          </div>
        </div>
        <div>
          <img src="https://res.cloudinary.com/dou3yyisb/image/upload/c_fill,ar_9:16,g_auto/v1697079405/TecnoMateriales/maquinaria11_ld9br4.jpg" />
        </div>
      </div>
      <div className={style.subTitulo}>
        <h2>Servicios</h2>
      </div>
      <div className={style.Servicios}>
        <div className={style.card}>
          <img src="" alt="" />
          <p>Descapotaje</p>
          <button>Contactenos</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
