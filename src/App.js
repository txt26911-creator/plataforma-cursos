import Home from './Pages/Home'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import MainLayout from './Layouts/MainLayout'
import Cursos from './Pages/Cursos'
import Login from './Pages/Login'
import Register from './Pages/Register'

function App() {
  return (
    <>
        <BrowserRouter>

      <Routes>

    
    <Route element={<MainLayout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/cursos' element={<Cursos/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>

    </Route>

      </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
