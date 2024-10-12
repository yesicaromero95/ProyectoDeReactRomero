import "./contador.scss"
const Contador = ({restar, contador, aumentar, botonAumentarDeshabilitado, botonRestarDeshabilitado}) => {
  return (
    <div className="contador">
      <button onClick={restar} disabled={botonRestarDeshabilitado}>-</button>
      <p>Contador: {contador} </p>
      <button onClick={aumentar} disabled={botonAumentarDeshabilitado} >+</button>
    </div>
  )
}

export default Contador



