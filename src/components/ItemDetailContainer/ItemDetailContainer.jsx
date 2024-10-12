import { useState, useEffect } from "react"
import { getProduct } from "../../data/data"
import ItemDetail from "./ItemDetail.jsx"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})
  const { idProductos } =  useParams()


  useEffect (()=>{
    getProduct(idProductos)
    .then((data)=> setProducto(data))
  }, [idProductos])
  
  return (
   <ItemDetail producto={producto} />
  )
}

export default ItemDetailContainer
