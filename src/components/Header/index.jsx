import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
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
    <div className={styles.nav__wrapper}>
      <div className={styles.container}>
        <nav ref={navRef} className={styles.nav}>
          <DarkMode/>
          <Link to="/" className={styles.nav__brand}>
            Linox
          </Link>
        
          <div ref={menuRef} className={collapse ? `${styles.nav__menu} ${styles.nav__collapse}` : styles.nav__menu}>
            <Link className={`${styles.nav__link} ${activePage === '/' ? styles.active : ''}`} onClick={onToggle} to="/">
              Home
            </Link>
            <Link className={`${styles.nav__link} ${activePage === '/sobre' ? styles.active : ''}`} onClick={onToggle} to="/sobre">
              Sobre
            </Link>
            <Link className={`${styles.nav__link} ${activePage === '/projetos' ? styles.active : ''}`} onClick={onToggle} to="/projetos">
              Projetos
            </Link>
            <Link className={`${styles.nav__link} ${activePage === '/contatos' ? styles.active : ''}`} onClick={onToggle} to="/contatos">
              Contatos
            </Link>
          </div>
          <div className={styles.toggler__icon} onClick={onToggle}>
            <div className={styles.line__1}></div>
            <div className={styles.line__2}></div>
            <div className={styles.line__3}></div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header;
