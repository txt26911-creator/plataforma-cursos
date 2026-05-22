import { Container, Button, Form} from "react-bootstrap"
import "../Styles/login.css"

const Login = () => {
  return (
    <Container fluid>
        <div className='content'>
        <div className='login-form'>
        <Form>
        <img src='user.png' alt='logo' className='logo'/>
        <h3>APLICACIÓN INTEGRAL DE GESTIÓN</h3>
        
        <label>Usuario</label>
        <input type="text" className='form-control' />
        <label>Contraseña</label>
        <input type="password"   className='form-control' />
        <Button variant='success' >ACCEDER</Button>   
        </Form>
        </div>
        
      </div>
    </Container>
  )
}

export default Login