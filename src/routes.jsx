import { Routes, Route, useLocation } from 'react-router-dom';
import { animated, useTransition } from '@react-spring/web';
import Header from './components/Header/index';
import Footer from './components/Footer';
import Home from './pages/Home';
import Sobre from './pages/Sobre/index';
import Projetos from './pages/Projetos/index';
import Contatos from './pages/Contatos/index';
import Page404 from './pages/Page404';
import PaginaBase from './pages/PaginaBase/index';

function AnimatedRoutes() {
  const location = useLocation();
  
  const transitions = useTransition(location, {
    from: { opacity: 0, transform: 'translateY(50px)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(50px)' },
  });

  return (
    <>
      <Header />
      {transitions((props, item) => (
        <animated.div style={{ ...props, position: 'absolute', width: '100%', minHeight: '100vh' }}>
          <Routes location={item}>
            <Route path="/" element={<PaginaBase />}>
              <Route index element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/projetos" element={<Projetos />} />
              <Route path="/contatos" element={<Contatos />} />
              <Route path="/*" element={<Page404 />} />
            </Route>
          </Routes>
        </animated.div>
      ))}
      <Footer />
    </>
  );
}

export default AnimatedRoutes;
