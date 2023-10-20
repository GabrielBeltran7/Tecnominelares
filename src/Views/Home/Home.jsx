import style from "./Home.module.css";
import Header from "../../components/Header/Header";
import Contador from "../../components/Contador/Contador";
import Carrousel from "../../components/Carrousel/Carrousel";
import "animate.css";
import { getServicios } from "../../Redux/Actions";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiCheckDouble } from "react-icons/bi";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { FcApproval, FcInspection, FcDiploma2 } from "react-icons/fc";
import Cards from "../../components/Cards/Cards";
const Home = () => {
  const dispatch = useDispatch(); // Usa useDispatch como una función

  const [mostrarContador, setMostrarContador] = useState(false);
  useEffect(() => {
    dispatch(getServicios()); // Despacha la acción para obtener los servicios
  }, []);

  const servicios = useSelector((state) => state.servicios);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMostrarContador(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={style.container}>
      <div className={style.title}>
        <div className={style.containerNav}>
          <Header />
        </div>
        <div class={`animate__animated animate__backInDown ${style.image}`}>
          <img
            src="https://res.cloudinary.com/dou3yyisb/image/upload/v1697084862/TecnoMateriales/logo_nvjh7f.png"
            alt=""
            width="100px"
          />
          <h1>
            TECNO<span>MINERALES</span>
          </h1>
          <p>Arenas & Gravas</p>
        </div>
        <div className={style.containerImages}>
          <div
            class="animate__animated animate__fadeInLeft"
            className={style.imageCertificados}
          >
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
            <p>S.A.S</p>
            <p>NIT: 901.674.891-6</p>
            <p>REGISTRO CAR Nro. 59</p>
            <p>REGISTRO CAR Nro. 60</p>
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
            <h4>
              {" "}
              <FcApproval /> Certificación
            </h4>
            <p>
              Certificamos la disposición de sus escombros de forma rápida y
              segura.
            </p>
          </div>
          <div>
            <h4>
              {" "}
              <FcInspection />
              Regulación
            </h4>
            <p>
              Estamos avalados por la Secretaria Dstrital de Ambiente con el pin
              xxxx-xx-xxxx
            </p>
          </div>
          <div>
            <h4>
              <FcDiploma2 />
              Cumplimiento
            </h4>
            <p>
              Aseguramos la adecuada disposición de los materiales para el
              cuidado del medio ambiente, autorizados con la resolución xxxx/xx
            </p>
          </div>
        </div>
        <div className={style.aptos}>
          <h3>
            {" "}
            <FaCheckCircle className={style.iconApto} /> Materiales aptos:
          </h3>
          <div>
            <h4>
              Productos de excavación, nivelaciones y sobrantes de la adecuación
              del terreno:
            </h4>
            <p>Tierras y materiales pétreos no contaminados</p>
          </div>
          <div>
            <h4>Productos usados para cimentaciones y pillotajes:</h4>

            <p> Arcillas, Limos, Lodos inertes.</p>
          </div>
          <div>
            <h4>Pétreos:</h4>
            <p>
              Arenas, gravas, gravillas, trozos de ladrillos y bloques,
              cerámicas, sobrantes de mezcla de cementos y concretos.
            </p>
          </div>
        </div>

        <div className={style.noAptos}>
          <h3>
            <FaTimesCircle className={style.iconNoApto} /> Materiales no aptos:
          </h3>
          <div>
            <h4>Residuos Peligrosos</h4>
            <div className={style.containerIconText}>
              <p>
                Desechos de productos químicos, emulsiones, alquitrán, pinturas,
                disolventes orgánicos, aceites, asfaltos y otros elementos
                peligrosos
              </p>
            </div>
          </div>
          <div>
            <h4>Residuos especiales:</h4>
            <div className={style.containerIconText}>
              <p>
                Poliestireno-icopor, carton-yeso (drywall), asbesto, lodos
                residuales de compuestos, asfalto.
              </p>
            </div>
          </div>
          <div>
            <h4>Residuos contaminados:</h4>
            <div className={style.containerIconText}>
              <p>
                Materiales aprovechables que se encuentren contaminados con
                residuos peligrosos y especiales.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.subTitulo}>
        <h2>Servicios</h2>
      </div>

      <Cards servicios={servicios} />
    </div>
  );
};

export default Home;
