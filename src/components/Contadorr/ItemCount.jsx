import { useState } from "react"
import Contador from "./Contador"
const ItemCount = () => {
  const [ contador, setContador] = useState (1)
  const limiteSuperior = 5;
  const limiteInferior = 1
  const aumentar = () => {
    if (contador<limiteSuperior){
    setContador(contador + 1)
    console.log("Clickeamos el boton", contador)  
    } else{

    }
  }

  const restar = () => {
    if (contador>limiteInferior)
    setContador(contador - 1)
    console.log("Clickeamos el boton", contador)
  }

  return (
  <Contador restar={restar} contador={contador} aumentar={aumentar} botonAumentarDeshabilitado={contador >= limiteSuperior}
  botonRestarDeshabilitado={contador <= limiteInferior}/>
  )
}

export default ItemCount
