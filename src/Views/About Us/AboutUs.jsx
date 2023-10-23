import style from "./aboutUs.module.css";
import Header from "../../components/Header/Header";
import { FcBusinessman, FcBusinesswoman } from "react-icons/fc";

export default function AboutUs() {
  return (
    <div className={style.aboutUsContainer}>
      <div className={style.headerContainer}>
        <Header />
      </div>
      <div className={style.tituloAbout}>
        <h1>Sobre nosotros</h1>
      </div>
      <section className={style.quienesSomos}>
        <div className={style.bloqueUno}>
          <h3 className={style.subTitulo}>¿Quienes somos?</h3>
          <p className={style.parrafo}>
            TECNO MINERALES Arenas & Gravas S.A.S, NIT, 901.674.891-6, es una
            empresa naciente con profesionales de alta experiencia en el área de
            ingeniería y asuntos ambientales, la planta TECNO MINERALES Arenas &
            Gravas S.A.S. NIT, 901.674.891-6, la cual está orientada a presentar
            lineamientos ambientales para el correcto desarrollo de los procesos
            que involucran el aprovechamiento de residuos de construcción y
            demolición, pétreos y pétreos asfálticos.
            <img
              src="https://res.cloudinary.com/dou3yyisb/image/upload/v1697084862/TecnoMateriales/logo_sin_fondo_qhdxvn.png"
              alt=""
            />
          </p>
        </div>
      </section>
      <section className={style.quienesSomos}>
        <div className={style.bloqueUno}>
          <h3 className={style.subTitulo}>Nuestra misión</h3>
          <p className={style.parrafo}>
            <img
              src="https://media.istockphoto.com/id/1456699734/es/foto/el-ingeniero-habla-con-el-contratista-para-supervisar-y-planificar-el-trabajo.jpg?s=612x612&w=0&k=20&c=SO3LobM8bAm3Em34dew9D93qGMUwb7LVCd_rjFUpp20="
              alt=""
              width="350"
            />
            Es ofrecer a nuestros clientes una experiencia para prevenir,
            reducir y controlar los niveles de contaminación. Para ello
            trabajaremos incasablemente en la concientización de la importancia
            de administrar correctamente los residuos inherentes a la actividad
            humana, pondremos a disposición nuestro conocimiento, experiencia y
            fuerza de trabajo para lograr que el país establezca procesos
            productivos y contribuyentes en la gestión de dichos residuos y
            continuaremos apoyando las iniciativas y requerimientos establecidos
            para que el futuro del ambiente y que sea cada vez mejor y podamos
            entregarles a las futuras generaciones un mundo en que el equilibrio
            y la armonía ambiental y sean el pilar sobre el cual construyan una
            nueva sociedad.
          </p>
        </div>
      </section>
      <section className={style.bloqueDos}>
        <h3 className={style.subTitulo}>¿Por qué elegirnos?</h3>
        <p className={style.parrafoDos}>
          <p>
            {" "}
            TECNO MINERALES Arenas & Gravas S.A.S, NIT, 901.674.891-6, es una
            organización dedicada a la ingeniería aplicada en las áreas de
            construcción y saneamiento básico asumiendo el compromiso de
            prevención de la contaminación y mejora continua, dentro de los
            lineamientos del desarrollo sostenible.
          </p>{" "}
          <br />{" "}
          <p>
            La permanente evolución y desarrollo urbano en la Sabana de Bogotá
            está asociado a la ejecución y construcción de obras civiles, las
            cuales generan residuos sólidos, más conocidos como Residuos de
            Construcción y Demolición - RCD -.
          </p>{" "}
          <br />{" "}
          <p>
            La creciente actividad constructora, como respuesta a la necesidad
            de satisfacer la demanda de vivienda e infraestructura en la zona de
            la Sabana de Bogotá, ocasiona impactos ambientales, económicos y
            sociales, entre los cuales uno de los más relevantes es el del
            incremento del volumen de RCD, por la ejecución de obras de
            servicios públicos, infraestructura y urbanismo, además,
            relacionadas en los trabajos de construcción, demolición,
            excavación, remodelación, instalación y limpieza.
          </p>{" "}
          <br />{" "}
          <p>
            Con esta actividad se reincorporan materiales, que actualmente se
            consideran de desecho, al ciclo productivo y a la vez, lograr una
            disminución en el impacto ambiental generado por el sector de la
            construcción, ampliando la actual capacidad operativa de la compañía
            y el área de cobertura.
          </p>{" "}
          <br />
          <p>
            Los Residuos de Construcción y Demolición – RCD, antes denominados
            escombros, son materiales considerados inertes -no peligrosos-
            susceptibles de ser aprovechados mediante transformación y
            reincorporación como materia prima de agregados en la fabricación de
            nuevos productos (Castaño y otros, 2013).
          </p>{" "}
          <br />{" "}
          <p>
            Al respecto, Botero (2003) citado por Escandón (2011) menciona que
            en el sector de la construcción se generan una gran cantidad de
            residuos de diferentes tipos, pero es solo una parte de estos la que
            puede ser aprovechada para el mismo objetivo constructivo del sector
            civil de la ingeniería, ya sea reusándolos o reciclándolos.
            Básicamente deben ser materiales totalmente inertes y no
            contaminados que se estima son el 80% de los RCD generados en la
            actividad, que abarca materiales como ladrillos o bloques, concreto,
            roca, material de excavación, acero, madera y otros.
          </p>
        </p>
      </section>
      <div className={style.tituloAbout}>
        <h2>Creadores</h2>
      </div>

      <section className={style.sectionCreadores}>
        <div className={style.caracteristicas}>
          <img
            src="https://res.cloudinary.com/dou3yyisb/image/upload/v1697686581/TecnoMateriales/engineer_uyjy7b.png"
            alt=""
            width="100px"
          />
          <p>Jorge Barragan</p>
          <p>Ingeniero Geólogo</p>
        </div>
        <div className={style.caracteristicas}>
          <img
            src="https://res.cloudinary.com/dou3yyisb/image/upload/v1697686581/TecnoMateriales/engineer_uyjy7b.png"
            alt=""
            width="100px"
          />
          <p>Diego Neira</p>
          <p>Ingeniero Civil</p>
        </div>
        <div className={style.caracteristicas}>
          <img
            src="https://res.cloudinary.com/dou3yyisb/image/upload/v1697686581/TecnoMateriales/engineer_uyjy7b.png"
            alt=""
            width="100px"
          />
          <p>Juan Diego Barragan Pulido</p>
          <p>Ingeniero Civil</p>
        </div>
        <div className={style.caracteristicas}>
          <img
            src="https://res.cloudinary.com/dou3yyisb/image/upload/v1697686547/TecnoMateriales/worker_oclbbb.png"
            alt=""
            width="100px"
          />
          <p>Catalina Medina</p>
          <p>Ingeniera Ambiental</p>
        </div>
        <div className={style.caracteristicas}>
          <img
            src="https://res.cloudinary.com/dou3yyisb/image/upload/v1697686581/TecnoMateriales/engineer_uyjy7b.png"
            alt=""
            width="100px"
          />
          <p>Rubinel Giraldo</p>
          <p>Ingeniero Topógrafo</p>
        </div>
      </section>
    </div>
  );
  //
}
