import { Link } from "react-router-dom";
import avatar from "../../../public/images/Eu.jpg";
import Typed from "typed.js";
import style from "./style.module.css";
import { useEffect, useRef } from "react";

function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Jorge", "Bittencourt", "Silva"],
      startDelay: 400,
      typeSpeed: 130,
      backSpeed: 130,
      backDelay: 1000,
      loop: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="flex flex-col justify-center md:flex-row items-center md:justify-evenly min-h-screen w-full px-4 md:px-8">
      <figure className="w-[60%] md:w-[30%] flex justify-center items-center flex-shrink-0 mb-8 md:mb-0">
        <img
          className={`w-44 sm:w-52 md:w-64 lg:w-96 hover:scale-105 ${style.avatar}`}
          src={avatar}
          alt="Lino Jorge"
        />
      </figure>
      <div className="w-[90%] md:w-[60%] flex flex-col items-center justify-center space-y-4">
        <div className="w-full px-5 flex flex-col items-center md:items-start justify-center">
          <p className="w-full text-center md:text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--title-color)]">
            <span className="text-gray-300 block mb-2 sm:mb-3">
              Olá, sou
            </span>
            <span className="text-red-500 text-4xl sm:text-5xl md:text-6xl lg:text-7xl inline-block transition-transform duration-300 ease-in-out hover:-translate-y-1">
              Lino
            </span>
            <br />
            <div className="relative w-full md:w-3/4 h-10 md:h-14 mt-2 sm:mt-4">
              <span
                className="text-red-500 text-4xl sm:text-5xl md:text-6xl lg:text-7xl inline-block transition-transform duration-300 ease-in-out hover:-translate-y-1"
                ref={el}
              ></span>
            </div>
            <br />
            <span className="text-gray-300 mt-4 block">
              Dev Fullstack
            </span>
          </p>
          <Link
            to="/sobre"
            className="w-full inline-flex mt-4 text-center items-center justify-center sm:w-[220px] md:w-[250px] h-[40px] sm:h-[45px] md:h-[50px] text-md sm:text-lg font-bold bg-red-500 text-white rounded-lg transition-colors duration-300 hover:bg-gray-800 hover:text-gray-100"
          >
            Sobre mim
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
