import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail.jsx"
import { useParams } from "react-router-dom"
import { useContext } from "react"
import { doc, getDoc } from "firebase/firestore"
import db from "../../db/db.js"
import { CartContext } from "../../context/CartContext.jsx"

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})
  const [hideItemCount, setHideItemCount] = useState(false)
  const { addProductInCart } = useContext(CartContext)
  const { idProductos } = useParams()
  const addProductos = (contador) => {
    const productoCart = { ...producto, quantity: contador }
    addProductInCart(productoCart)
    setHideItemCount(true)
  }
  const getProduct = () => {
    const docRef = doc(db, "productos", idProductos)
    getDoc(docRef)
      .then((dataDb) => {
        const productDb = { id: dataDb.id, ...dataDb.data() }
        setProducto(productDb)
      })
  }

  useEffect(() => {
    getProduct()
  }, [idProductos])

  return (
    <ItemDetail producto={producto} addProductos={addProductos} hideItemCount={hideItemCount} />
  )
}

export default ItemDetailContainer
