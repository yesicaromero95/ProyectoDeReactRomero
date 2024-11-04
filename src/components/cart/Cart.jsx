import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import "./cart.scss"
import { Link } from "react-router-dom"

const Cart = () => {
  const { cart, totalPrecio, deleteProducto, deleteCart } = useContext(CartContext)

  if (cart.length === 0) {
    return (
      <div className="aviso">
        <h2>No hay productos en el carrito...</h2>
        <Link to="/" className="volverInicio">Volver al inicio</Link>
      </div>
    )
  }
  return (
    <div className="cart">
      {
        cart.map((productoCart) => (
          <div key={productoCart.id}>
            <p className="titulo">Productos en el carrito</p>
            <div className="listaProductos">
            <img src={productoCart.imagen} alt="" />
            <p className="nombreProducto">Producto: {productoCart.nombre}</p>
            <p>Precio c/u: ${productoCart.precio} </p>
            <p>Cantidad: {productoCart.quantity} </p>
            <p>Precio parcial: ${productoCart.precio * productoCart.quantity} </p>
            <button onClick={() => deleteProducto(productoCart.id)}>Borrar Producto</button>
          </div>
          </div>
        ))

      }
      <div className="precioTotal">
        <p >Precio total: ${totalPrecio()} </p>
        <Link to="/checkout" className="linkCompra"> Continuar con mi compra</Link>
        <button onClick={deleteCart}>Vaciar carrito</button>
      </div>
    </div>
  )
}

export default Cart
