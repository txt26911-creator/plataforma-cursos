import {Row, Col, Container} from 'react-bootstrap'
import Cards from '../Components/Cards'


const Cursos = () => {
  return (
    <Container fluid>
         <Row className='mt-4'>

        <Col className='mb-3 ms-5'>
          <Cards/>
        </Col>
        <Col className='mb-3 ms-5'>
          <Cards/>
        </Col>
        <Col className='mb-3 ms-5'>
          <Cards/>
        </Col>
        <Col className='mb-3 ms-5'>
          <Cards/>
        </Col>

      </Row>

    </Container>
  )
}

export default Cursos