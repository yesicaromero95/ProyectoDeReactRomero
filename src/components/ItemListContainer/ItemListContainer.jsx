import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../db/db.js"
import { useParams } from "react-router-dom"
import "./item.scss"

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([])
  const { idCategoria } = useParams()
  const getProducts = () => {
    const collectionName = collection(db, "productos")
    getDocs(collectionName)
      .then((dataDb) => {
        const productsDb = dataDb.docs.map((productDb) => {
          return { id: productDb.id, ...productDb.data() }
        })
        setProductos(productsDb)
      })
  }

  const getProductsByCategoria = () => {
    const collectionName = collection(db, "productos")
    const q = query(collectionName, where("categoria", "==", idCategoria))
    getDocs(q)
      .then((dataDb) => {
        const productsDb = dataDb.docs.map((productDb) => {
          return { id: productDb.id, ...productDb.data() }
        })
        setProductos(productsDb)
      })

  }
  useEffect(() => {
    if (idCategoria) {
      getProductsByCategoria()
    } else {
      getProducts()
    }
  }, [idCategoria])




  return (
    <div className="itemListContainer" >
      <div><h1> {greeting} </h1></div>
      <div><ItemList productos={productos} /></div>
    </div>
  )
}

export default ItemListContainer
