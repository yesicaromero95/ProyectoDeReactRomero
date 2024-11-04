import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Cart from './components/cart/Cart'
import './App.css'
import Checkout from './components/Checkout/Checkout'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <div className="container" >
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <ToastContainer/>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Bienvenidos a Vivero Vida Verde" />} />
            <Route path="/categoria/:idCategoria" element={<ItemListContainer greeting="Bienvenidos a Vivero Vida Verde" />} />
            <Route path="/detail/:idProductos" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} ></Route>
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>


    </div>
  )
}

export default App
