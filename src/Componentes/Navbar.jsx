const NavBar = ({estado}) => {
    return(
        <>
      <nav>
         <ul>
          <a> Inicio </a> 
          <a> {estado ? "Cerrar Sesion ": "Iniciar Sesion"} </a>
       </ul>
      </nav>
        </>
    )
}
export default NavBar