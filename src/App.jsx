import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  
  

  return (
    <div className="container" >
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/" element={<ItemListContainer greeting="Bienvenidos a Vivero Vida Verde"/>} />
      <Route path="/categoria/:idCategoria" element={<ItemListContainer greeting="Bienvenidos a Vivero Vida Verde"/>} />
      <Route path="/detail/:idProductos" element= {<ItemDetailContainer/>} />
      </Routes>
      </BrowserRouter>
      
      
    </div> 
  )
}

export default App
