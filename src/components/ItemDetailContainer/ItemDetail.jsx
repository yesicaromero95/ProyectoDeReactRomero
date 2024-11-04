import ItemCount from "../Contadorr/ItemCount"
import { Link } from "react-router-dom"
import "./itemDetail.scss"
const ItemDetail = ({ producto, addProductos, hideItemCount }) => {
  return (
    <div className="itemDetail">
      <img src={producto.imagen} alt="" />
      <div className="detalleDeFoto">
        <h2>{producto.nombre} </h2>
        <p>{producto.descripcion}</p>
        <p>Precio: ${producto.precio} </p>
        {
          hideItemCount === true ? (
            <Link to="/cart" className="linkProductos">Ver mis productos</Link>
          ) : (
            <ItemCount stock={producto.stock} addProductos={addProductos} />
          )
        }

      </div>
    </div>
  )
}

export default ItemDetail
