import { Link } from "react-router-dom"
const Item = ({ producto }) => {
  return (
    <div className="item" >
      <img src={producto.imagen} alt="" width={100} />
      <div className="pieDeFoto">
        <p > {producto.nombre} </p>
        <p>${producto.precio} </p>
      </div>
      <Link to={"/detail/" + producto.id} className="verDetalle">Ver detalle</Link>
    </div>
  )
}

export default Item
