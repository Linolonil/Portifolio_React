import avatar from "../../../public/images/Eu.jpg";
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript, BiLogoPhp } from "react-icons/bi";
import { PiFileSql } from "react-icons/pi";
import { FaJava } from "react-icons/fa";
import { SiPostgresql, SiMongodb, SiSwagger, SiPython } from "react-icons/si";
import style from "./Sobre.module.css";
import { useEffect, useState } from "react";

function Sobre() {
  const [periodo, setPeriodo] = useState(1);

  useEffect(() => {
    const inicioFaculdade = new Date("01-01-2022");
    const hoje = new Date();

    const diferencaMeses =
      (hoje.getFullYear() - inicioFaculdade.getFullYear()) * 12 +
      hoje.getMonth() -
      inicioFaculdade.getMonth();
    const periodoAtual = Math.floor(diferencaMeses / 6) + 1;

    setPeriodo(periodoAtual);
  }, []);

  const listIcon = [
    { icon: FaHtml5, text: "HTML5" },
    { icon: FaCss3, text: "CSS3" },
    { icon: IoLogoJavascript, text: "JavaScript" },
    { icon: BiLogoTypescript, text: "TypeScript" },
    { icon: FaReact, text: "ReactJS" },
    { icon: FaNodeJs, text: "NodeJS" },
    { icon: PiFileSql, text: "SQL" },
    { icon: SiPostgresql, text: "PostgreSQL" },
    { icon: SiMongodb, text: "MongoDB" },
    { icon: BiLogoPhp, text: "PHP" },
    { icon: FaGitAlt, text: "Git/GitHub" },
    { icon: SiSwagger, text: "Swagger" },
    { icon: SiPython, text: "Python" },
    { icon: FaJava, text: "Java" },
  ];

  return (
    <section className="w-full min-h-[calc(100vh-(48px + 50px))] flex flex-col items-center justify-center px-8 ">
      <div className="w-full flex flex-col pt-8 md:flex-row justify-center items-center gap-4 md:gap-12 lg:gap-14 mb-6 ">
        <figure className="flex justify-center mt-12 ">
          <img
            className={`w-48 h-auto  ${style.avatar}`}
            src={avatar}
            alt="Lino Jorge"
          />
        </figure>
        <div className="sm:w-100 text-start md:w-[72%]  md:text-left sm:mt-10">
          <h2 className="mb-4 text-[var(--title-color)] font-bold text-3xl ">
            Sobre 
          </h2>
          <p className=" w-full text-xl font-semibold text-[var(--text-color)] ">
            Me chamo{" "}
            <span className="text-[var(--red)] text-xl font-bold">
              Lino Jorge Bittencourt da Silva
            </span>{" "}
            <br />
            <strong className="text-[var(--title-color)] font-bold">
              Dev Full Stack
            </strong>{" "}
            <br />
             {periodo != 10 ?  `Cursando o ${periodo}° período de` : "Formado em"} Engenharia da Computação <br />
             Utilizo no frontend ReactJS, JavaScript, HTML5, CSS3 e no backend utilizo  Node.js, TypeScript, PHP, MongoDB, MySQL, PostgreSQL.
              Também tenho conhecimentos em Git/GitHub, Swagger, Python, e Java.
          </p>
        </div>
      </div>

      <div className="w-screen flex flex-col items-center justify-center gap-6  ">
      <h2 className="mb-4 text-[var(--title-color)] font-bold text-3xl ">
            Techs
          </h2>
        <div className="flex  justify-center align-center gap-4 w-screen max-w-4xl  ">
        <div className="w-[85%]     flex flex-wrap justify-around gap-14 p-4 max-w-4xl pb-16">
              {listIcon.map((icon, index) => (
                <icon.icon
                  key={index}
                  title={icon.text}  // Adiciona o nome da tecnologia como tooltip
                  className=" text-[var(--download-color)] text-5xl transition-all ease-in-out duration-500 hover:text-[var(--first-color)] "
                />
              ))}
        </div>
          </div>
        </div>
    </section>
  );
}

export default Sobre;
