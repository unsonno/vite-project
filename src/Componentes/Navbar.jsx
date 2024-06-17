const NavBar = ({iniciada}) => {
    return(
        <>

      <nav>
         <ul>
          <a> Inicio </a> 
          <a> {iniciada ? "Cerrar Sesion ": "Iniciar Sesion"} </a>
       </ul>

      </nav>

        </>
    )
}
export default NavBar