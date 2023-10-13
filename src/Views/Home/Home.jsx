import style from "./Home.module.css";
import Header from "../../components/Header/Header";
import Contador from "../../components/Contador/Contador";
import Carrousel from "../../components/Carrousel/Carrousel";
import "animate.css";
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
        <img
          src="https://res.cloudinary.com/dou3yyisb/image/upload/v1697084862/TecnoMateriales/logo_sin_fondo_qhdxvn.png"
          alt=""
          className={style.logo}
          class="animate__animated animate__fadeInDown"
        />
        <div className={style.containerImages}>
          <div class="animate__animated animate__fadeInLeft">
            <img
              src="https://res.cloudinary.com/dou3yyisb/image/upload/v1697035700/TecnoMateriales/sello_ceritifcacion-removebg-preview_or5q5a.png"
              alt="Car Certificado"
            />
            <img
              src="https://res.cloudinary.com/dou3yyisb/image/upload/v1697035700/TecnoMateriales/la_car-removebg-preview_qusgdz.png"
              alt="CAR logo"
            />
          </div>
          <div class="animate__animated animate__fadeInRight">
            <p>Nit: 901.674.891-6</p>
            <p>Registro CAR Nro. 59</p>
          </div>
        </div>

        <div className={style.contadores}>
          <div className={style.contador}>
            <p class="animate__animated animate__bounce">
              +{mostrarContador && <Contador endValue={150} />}clientes
              satisfechos
            </p>
          </div>

          <div className={style.contador}>
            <p class="animate__animated animate__bounce">
              +{mostrarContador && <Contador endValue={15} />} Años en la
              industria
            </p>
          </div>
          <div className={style.contador}>
            <p class="animate__animated animate__bounce">
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
          <img
            src="https://images.pexels.com/photos/12988318/pexels-photo-12988318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <p>Descapotaje</p>
          <button>Contactenos</button>
        </div>
        <div className={style.card}>
          <img
            src="https://images.pexels.com/photos/12988318/pexels-photo-12988318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <p>Excavación</p>
          <button>Contactenos</button>
        </div>
        <div className={style.card}>
          <img
            src="https://images.pexels.com/photos/12988318/pexels-photo-12988318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <p>Escombros</p>
          <button>Contactenos</button>
        </div>
        <div className={style.card}>
          <img
            src="https://images.pexels.com/photos/12988318/pexels-photo-12988318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <p>Descapotaje</p>
          <button>Demolición</button>
        </div>
        <div className={style.card}>
          <img
            src="https://images.pexels.com/photos/12988318/pexels-photo-12988318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <p>Alquiler de Maquinaria</p>
          <button>Contactenos</button>
        </div>
        <div className={style.card}>
          <img
            src="https://images.pexels.com/photos/12988318/pexels-photo-12988318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <p>Disposición</p>
          <button>Contactenos</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
