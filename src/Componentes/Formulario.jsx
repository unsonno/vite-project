const Form = ({aceptado}) => {
    return(
        <>
        <div>
            <input type="text" placeholder="Ingresa tu usuario" /> <br />
            <input type="passw" placeholder="Ingresa tu contraseña" />
            <button id="btnIn" onClick={aceptado}> Iniciar Sesion</button>
            <p id="txt"></p>



            {/* validar inicio sesion y agregar mensaje de bienvenida al entrrar*/}

            
        </div>
        </>
    )
}
export default Form
