import { useState } from "react"
import FormCheckout from "./FormCheckout"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Timestamp, addDoc, collection, setDoc, doc } from "firebase/firestore"
import db from "../../db/db.js"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import "./checkout.scss"


const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    fullname: "",
    phone: "",
    email: "",
    repeatEmail:"",
  })
  const [orderId, setOrderId] = useState(null)
  const { cart, totalPrecio, deleteCart } = useContext(CartContext)
  const handleChangeInput = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value })
  }

  const handleSubmitForm = (event) => {
    event.preventDefault()
    const order = {
      comprador: { ...dataForm },
      productos: [...cart],
      date: Timestamp.fromDate(new Date()),
      total: totalPrecio()
    }

    if(dataForm.email === dataForm.repeatEmail){
    uploadOrder(order)  
    }else{
      toast.error("Los emails deben coincidir.")
    }
    
  }
  const uploadOrder = (newOrder) => {
    const ordersCollection = collection(db, "orders")
    addDoc(ordersCollection, newOrder)
      .then((response) => {
        setOrderId(response.id)
      })
      .finally(() => {
        toast.success("Gracias por su compra!")
        updateStock()
      })
  }
  const updateStock = () => {
    cart.map(({ quantity, id, ...productCart }) => {
      const productRef = doc(db, "productos", id)
      setDoc(productRef, { ...productCart, stock: productCart.stock - quantity })
    })
    deleteCart()
  }



  return (
    <div className="checkout">
      {
        orderId ? (
          <div>
            <h2>Orden enviada correctamente </h2>
            <p>Guarde su numero de seguimiento: {orderId} </p>
            <Link to="/" className="volverInicio">Volver al inicio</Link>
          </div>
        ) : (
          <FormCheckout dataForm={dataForm} handleChangeInput={handleChangeInput} handleSubmitForm={handleSubmitForm} />
        )
      }

    </div>
  )
}

export default Checkout
