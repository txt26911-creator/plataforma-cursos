import {Form, Container, Button} from "react-bootstrap"
import "../Styles/register.css"

const Register = () => {
  return (
        <Container fluid>
        <div className='content'>
        <div className='login-form'>
        <Form>
        
        <h3>COMPLETA LOS SIGUIENTE CAMPOS PARA CONTINUAR</h3>
        
        <label>Nombre(s)</label>
        <input type="text" className='form-control' />
        <label>Apellido(s)</label>
        <input type="text" className='form-control' />
        <label>Ocupación</label>
        <input type="text" className='form-control' />
        <label>Correo</label>
        <input type="text" className='form-control' />
        <label>Teléfono</label>
        <input type="number" className='form-control' />
        <label>Contraseña</label>
        <input type="password"   className='form-control' />
        <Button variant='success' >REGISTRARSE</Button>   
        </Form>
        </div>
        
      </div>
    </Container>
  )
}

export default Register