import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/CSS/App.css'
//import { Countries } from './pages/countries/Countries'
import { Session } from './pages/sesion/Session'
import { ProveedorUsuario } from './context/UserDataContext'
import { Countries } from './pages/countries/Countries'
import { ProtectedRouter } from './components/ProtectedRouterDom'

function App() {

  return (
    <>
    <ProveedorUsuario>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProtectedRouter><Countries /></ProtectedRouter>} /> 
          <Route path='/session' element={<Session></Session>} /> 
        </Routes>
      </BrowserRouter>
      </ProveedorUsuario>
    </>
  )
}

export default App
