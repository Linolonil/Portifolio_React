import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import DarkMode from '../DarkMode/DarkMode';

function Header() {
  const [collapse, setCollapse] = useState(false);
  const [activePage, setActivePage] = useState('');
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        !menuRef.current.contains(event.target)
      ) {
        setCollapse(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location]);

  const onToggle = () => {
    setCollapse(!collapse);
  };

  return (
    <div className="w-full  h-12 flex items-center justify-around fixed top-0 z-50 shadow-md bg-[var(--container-color)] text-[var(--text-color)] border-b border-[var(--outline-color)]">
      <nav ref={navRef} className="w-full flex items-center justify-between px-5 md:px-8">
        <div className="flex items-center justify-between w-full">
          <DarkMode />
          <Link to="/" className=" ml-20 font-bold text-2xl hover:text-[var(--red)] transition-colors duration-300 ease-linear">
            Linox
          </Link>
          
          {/* Menu Não Responsivo */}
          <div className="hidden md:flex items-center gap-12 text-lg font-bold">
            <Link className={`hover:text-[var(--red)] ${activePage === '/' ? 'text-[var(--red)]' : ''}`} to="/">
              Home
            </Link>
            <Link className={`hover:text-[var(--red)] ${activePage === '/sobre' ? 'text-[var(--red)]' : ''}`} to="/sobre">
              Sobre
            </Link>
            <Link className={`hover:text-[var(--red)] ${activePage === '/projetos' ? 'text-[var(--red)]' : ''}`} to="/projetos">
              Projetos
            </Link>
            <Link className={`hover:text-[var(--red)] ${activePage === '/contatos' ? 'text-[var(--red)]' : ''}`} to="/contatos">
              Contatos
            </Link>
          </div>

          {/* Botão do Menu Responsivo */}
          <div className="md:hidden cursor-pointer" onClick={onToggle}>
            <div className={`w-6 h-0.5 bg-[var(--title-color)] mb-1 transition-transform ${collapse ? '-rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-[var(--title-color)] mb-1 transition-opacity ${collapse ? 'opacity-0' : 'opacity-100'}`}></div>
            <div className={`w-6 h-0.5 bg-[var(--title-color)] transition-transform ${collapse ? 'rotate-45 -translate-y-1.5' : ''}`}></div>
          </div>
        </div>

        {/* Menu Responsivo */}
     {collapse ?  <motion.div
          ref={menuRef}
          initial={{ opacity: 0}}
          animate={{ opacity: collapse ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`${
            collapse ? 'opacity-100' : ' opacity-0'
          }  z-50 flex flex-col md:hidden items-center justify-around text-2xl font-bold gap-12 h-auto border-none absolute bg-[var(--container-color)] top-12 right-0 w-full transform transition-all duration-500 py-10`}
        >
          <Link className={`hover:text-[var(--red)] ${activePage === '/' ? 'text-[var(--red)]' : ''}`} onClick={onToggle} to="/">
            Home
          </Link>
          <Link className={`hover:text-[var(--red)] ${activePage === '/sobre' ? 'text-[var(--red)]' : ''}`} onClick={onToggle} to="/sobre">
            Sobre
          </Link>
          <Link className={`hover:text-[var(--red)] ${activePage === '/projetos' ? 'text-[var(--red)]' : ''}`} onClick={onToggle} to="/projetos">
            Projetos
          </Link>
          <Link className={`hover:text-[var(--red)] ${activePage === '/contatos' ? 'text-[var(--red)]' : ''}`} onClick={onToggle} to="/contatos">
            Contatos
          </Link>
        </motion.div> : null}
      </nav>
    </div>
  );
}

export default Header;
