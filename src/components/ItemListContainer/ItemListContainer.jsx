import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { getProducts } from "../../data/data.js"
import { useParams } from "react-router-dom"
import ItemCount from "../Contadorr/ItemCount"


import "./item.scss"

const ItemListContainer = ({greeting}) => {
  const [productos, setProductos] = useState ([])
  const {idCategoria} = useParams()

  useEffect(() => {
    getProducts ()
  .then((data)=> {

    if(idCategoria){
      const filterProductos= data.filter((producto)=>producto.categoria=== idCategoria)
      setProductos(filterProductos)
    }else{
     setProductos(data) 
    } 
  })
  .catch((error)=>{
    console.log(error)
  })
  .finally(()=>{
    console.log("finalizo la promesa")
  })
  }, [idCategoria])
  
  
  
  
  return (
    <div className="itemListContainer" >
      <div><h1> {greeting} </h1></div>
      <div><ItemList productos={productos} /></div>
      <div><ItemCount/></div>
      

    </div>
  )
}

export default ItemListContainer
