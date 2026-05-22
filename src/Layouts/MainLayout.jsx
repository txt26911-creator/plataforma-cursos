import {Outlet} from 'react-router-dom'
import Navegacion from '../Components/Navegacion'

const MainLayout = () => {
  return (
    
    <>
    <Navegacion/>
    <main className='main'>
        <Outlet/>
    </main>
    </>
  )
}

export default MainLayout
