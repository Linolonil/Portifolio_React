import Container from '../../components/Container'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { Outlet } from 'react-router-dom'

function PaginaBase(){
  return(
    <main>
      <Header/>
      <Container>
        <Outlet/>
      </Container>
      <Footer/>
    </main>

  )
}

export default PaginaBase