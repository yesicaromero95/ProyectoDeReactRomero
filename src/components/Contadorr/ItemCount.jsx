import { useState } from "react"
import "./contador.scss"

const ItemCount = ({ stock, addProductos }) => {
  const [contador, setContador] = useState(1)

  const handleClickDecrementar = () => {
    if (contador > 1) {
      setContador(contador - 1)
    }
  }

  const handleClickIncrementar = () => {
    if (contador < stock)
      setContador(contador + 1)

  }

  return (
    <div className="contador">
      <button onClick={handleClickDecrementar} >-</button>
      <p>{contador} </p>
      <button onClick={handleClickIncrementar}  >+</button>
      <button onClick={() => addProductos(contador)} >Agregar producto</button>
    </div>
  )
}

export default ItemCount
