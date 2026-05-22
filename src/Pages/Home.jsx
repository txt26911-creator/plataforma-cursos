import {Container, Row, Col} from 'react-bootstrap'



const Home = () => {
  return (
    <Container fluid>
     
        <Row className='mt-3 text-center'>
          <Col>
          <h1>Bienvenido a nuestro repositorio digital</h1>

          </Col>
        </Row>
        <Row className='text-center mt-4'>
          <Col className='mt-4'>
          <p>Aquí se puede colocar alguna image, logo, isotipo o bien la descripcion de la empresa</p>
          </Col>
        </Row>
     


        

    </Container>
  )
}

export default Home