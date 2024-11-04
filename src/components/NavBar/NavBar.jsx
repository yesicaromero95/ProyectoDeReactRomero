import CartWidget from "./CartWidget"
import { Link } from "react-router-dom";
import { PiPlantDuotone } from "react-icons/pi";
import "./navbar.scss"

const NavBar = () => {
  return (
    <nav className="navbar" >

      <Link to="/" className="brand" >
        <PiPlantDuotone className="icono" />
        <p className="tituloBrand">Vivero Vida Verde</p>
      </Link>
      <ul className="categories">
        <li >
          <Link to="/categoria/macetas" className="titulosCategorias">Macetas</Link>
        </li>
        <li >
          <Link to="/categoria/plantas para exterior" className="titulosCategorias">Plantas para exterior</Link>
        </li>
        <li >
          <Link to="/categoria/plantas para interior" className="titulosCategorias">Plantas para interior</Link>
        </li>
      </ul>

      <CartWidget />
    </nav>
  )
}

export default NavBar
