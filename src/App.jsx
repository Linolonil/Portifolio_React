import './App.css'
import Header from './components/Header';
import AppRoutes from './routes';
import Footer from './components/Footer/index';
import BackgroundParticles from './components/BackgroundParticles';

function App() {

  return (
    <>
    <div className="flex flex-col min-h-screen relative overflow-x-hidden">
      <BackgroundParticles />
      <div className=" relative z-10">
      <Header />
        <AppRoutes />
      </div>
      <Footer />
    </div>
    </>
  )
}

export default App
