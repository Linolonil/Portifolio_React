import './App.css'
import Header from './components/Header';
import AppRoutes from './routes';
import Footer from './components/Footer/index';
import BackgroundParticles from './components/BackgroundParticles';

function App() {

  return (
    <>
    <div className="flex flex-col w-screen min-h-screen overflow-x-hidden">
      <div className="relative">
        <BackgroundParticles />
      </div>
      <div className=" relative z-10 ">
      <Header />
        <AppRoutes />
      </div>
      <Footer />
    </div>
    </>
  )
}

export default App
