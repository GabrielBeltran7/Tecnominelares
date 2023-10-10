import style from "./Home.module.css";
import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <>
      <div className={style.container}>
        <Header />
        <div className={style.title}>
          <h2>
            Tecno<span>Materiales</span>{" "}
          </h2>
          <p>Tu lugar de confianza</p>
        </div>
      </div>
    </>
  );
};

export default Home;
