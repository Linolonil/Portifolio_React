import { Link } from 'react-router-dom';
import developerImage from '/developer-red.svg';
import AudioSpectrum from './../../components/AudioSpectrum/index';

function Home() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-evenly min-h-screen w-full">
      <div className="text-center md:text-left mt-5">
        <p className="text-3xl font-bold mb-4 text-[var(--title-color)]">
          Olá, sou <br />
          <span className="inline-block transition-transform duration-300 ease-in-out hover:translate-y-[-5px] text-red-500">Lino Jorge</span><br />
          Dev Full-Stack
        </p>
        <Link
          to="/sobre"
          className="inline-flex items-center justify-center w-[250px] h-[50px] text-lg font-bold bg-red-500 text-white rounded-lg border-0 cursor-pointer transition-colors duration-300 hover:bg-gray-800 hover:text-gray-100"
        >
          Sobre mim
        </Link>
      </div>
      <figure className="hidden md:block mt-1 md:mt-0">
        <img className="sm:h-52 md:h-96 max-w-full object-cover" src={developerImage} alt="Imagem de Home" />
      </figure>
      <AudioSpectrum /> {/* Adicione o componente de espectro de áudio */}
    </section>
  );
}

export default Home;
