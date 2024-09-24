import CartWidget from "./CartWidget"
import logo from "../../assets/logo.jpg"
import "./navbar.scss"

const NavBar = () => {
  return (
    <nav className="navbar" >
        <div className="brand" >
            <img src={logo} alt="" width={40} />
        </div>

        <ul className="categories">
            <li>Macetas</li>
            <li>Plantas para exterior</li>
            <li>Plantas para interior</li>
        </ul>
        <CartWidget/>
    </nav>
  )
}

export default NavBar
