import { createContext, useState } from "react";

const CartContext = createContext()
const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addProductInCart = (newProduct) => {
        const condicion = isInCart(newProduct.id)
        if (condicion) {
            let newCart = [...cart]
            newCart.forEach((productoCart) => {
                if (productoCart.id === newProduct.id) {
                    productoCart.quantity = productoCart.quantity + newProduct.quantity
                }
            })
            setCart(newCart)
        } else {
            setCart([...cart, newProduct])
        }

    }

    const isInCart = (idProducto) => {
        return cart.some((productoCart) => productoCart.id === idProducto)
    }

    const deleteProducto = (idProducto) => {
        const productosFilter = cart.filter((productoCart) => productoCart.id !== idProducto)
        setCart(productosFilter)
    }

    const totalQuantity = () => {
        const quantity = cart.reduce((total, productoCart) => total + productoCart.quantity, 0)
        return quantity
    }
    const totalPrecio = () => {
        const precio = cart.reduce((total, productoCart) => total + (productoCart.precio * productoCart.quantity), 0)
        return precio
    }
    const deleteCart = () => {
        setCart([])
    }
    return (
        <CartContext.Provider value={{ cart, addProductInCart, totalQuantity, totalPrecio, deleteProducto, deleteCart }}>
            {children}
        </CartContext.Provider>
    )

}



export { CartContext, CartProvider }