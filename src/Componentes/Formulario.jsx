import {useRef } from "react";
//dejar constancia de que los dos inputs son ref// ref.current.value ? ref.current.value ://if    (! () 
const Form = ({aceptado}) => {
    const user = useRef('')
    const pass = useRef('')
    const valid = () => {
        if (useRef.current.value ? undefined : {
            alert ("Por favor ingresa texto")
        }
    }
    return(
        <>
        <div>
            <input ref={user} type="text"  placeholder="Ingresa tu usuario" /> <br />
            <input ref={pass} type="text" placeholder="Ingresa tu contraseña" /> <br />
            <button id="btnIn" onClick={aceptado}> Iniciar Sesion</button>
            <p id="txt"></p>
            {/* validar inicio sesion y agregar mensaje de bienvenida al entrrar*/}
        </div>
        </>
    )
}
export default Form

