import "./itemDetail.scss"
const ItemDetail = ({producto}) => {
  return (
    <div className="itemDetail">
      <img src={producto.imagen} alt="" />
      <div className="detalleDeFoto">
      <h2>{producto.nombre} </h2>
      <p>{producto.descripcion}</p>
      <p>Precio: ${producto.precio} </p>
      </div>
    </div>
  )
}

export default ItemDetail
