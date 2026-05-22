import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Cards = () => {
  return (
    <>
        <Card style={{ width: '18rem' }} className='text-center' >
      <Card.Header>Seguridad e higiene</Card.Header>
      <Card.Body>
        <Card.Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex nostrum dolor ullam et omnis. Autem, ipsam? Cumque, necessitatibus reprehenderit amet omnis iusto, earum doloremque at recusandae consectetur, nisi magnam. Sit?
        </Card.Text>
        <Button variant="success">Inscribirme</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default Cards