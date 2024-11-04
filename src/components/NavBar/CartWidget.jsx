import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext)
  const total = totalQuantity()
  return (
    <Link to="/cart" className="cartWidget">
      <MdShoppingCart size={40} color="green" />
      <p>{total >= 1 && total} </p>
    </Link>
  )
}

export default CartWidget
