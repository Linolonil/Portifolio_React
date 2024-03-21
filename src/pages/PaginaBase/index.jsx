import Container from '../../components/Container'
import { Outlet } from 'react-router-dom'

function PaginaBase(){
  return(
    <main>
      <Container>
        <Outlet/>
      </Container>
    </main>

  )
}

export default PaginaBase