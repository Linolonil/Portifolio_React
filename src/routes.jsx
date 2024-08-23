import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Sobre from './pages/Sobre/index';
import Projetos from './pages/Projetos/index';
import Contatos from './pages/Contatos/index';
import Page404 from './pages/Page404';
import PaginaBase from './pages/PaginaBase/index';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="absolute w-screen min-h-screen"
        >
          <Routes location={location}>
            <Route path="/" element={<PaginaBase />}>
              <Route index element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/projetos" element={<Projetos />} />
              <Route path="/contatos" element={<Contatos />} />
              <Route path="/*" element={<Page404 />} />
            </Route>
          </Routes>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default AnimatedRoutes;
