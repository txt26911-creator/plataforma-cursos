import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button, Form} from 'react-bootstrap'
import "../Styles/colors.css"
import { Link } from 'react-router-dom';


const Navegacion = () => {
  return (
    <>

      <Navbar  data-bs-theme="dark" expand="lg" className=' navbar-azul'> 
        <Container fluid>
          <Navbar.Brand href="#home" className='fs-3'>Plataforma de cursos</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            
            <Link to='/' className='mx-3 fs-5'>Inicio</Link>
            <Link to='/cursos' className='mx-3 fs-5'>Cursos</Link>
          </Nav>
          <Form className='d-flex'>
              <Link to='/login' className='mx-3 fs-5 btn btn-outline-success'>Iniciar sesión</Link>
              <Link to='/register' className='mx-3 fs-5 btn btn-outline-dark'>Registrarse</Link>
             
          </Form>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navegacion