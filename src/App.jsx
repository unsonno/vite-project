import NavBar from "./Componentes/Navbar.jsx"
import  Form  from "./Componentes/Formulario.jsx"
import Mensaje from "./Componentes/Mensaje.jsx"
import { useState, useRef } from "react";

function App() {
  const [aceptado , setInicia] = useState(false) 
  const Cambio =()=>{
    setInicia(true)
  }
  return (
    <>
  <div>
  <NavBar estado={aceptado}/>
  {aceptado ? <Mensaje/>: undefined}
  {aceptado ? undefined  : <Form aceptado={Cambio}/> }
  </div>
  </>
  )
}

export default App

