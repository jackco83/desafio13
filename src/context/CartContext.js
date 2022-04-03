import { createContext, useState } from "react"

export const CartContext = createContext()

const { Provider } = CartContext

const MyProvider = ({ children }) => {

  const [cart, setCart] = useState([])
  
  const addItem = (item, quantity) => {
    isInCart(item.id)
      ? addQuantity(item, quantity)
      : setCart([...cart, { ...item, quantity }])
  }

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id)
  }

  const addQuantity = (item, quantity) => {
    const newProducts = cart.map((prod) => {
      if (prod.id === item.id) {
        const newProduct = {
          ...prod,
          quantity: prod.quantity + quantity,
        };
        return newProduct
      } else {
        return prod
      }
    })
    setCart(newProducts)
  };

  const clearCart = () => {
    setCart([])
  };

  const calcTotal = () => {
    let totalCart = 0
    cart.forEach((prod) => {
      totalCart += prod.price * prod.quantity
    })
    return totalCart
  };

  const calcTotalUni = () => {
    let totalUni = 0
    cart.forEach((prod) => {
      totalUni += prod.quantity
    })
    return totalUni
  };

  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id))
  }

  const contextValue = {
    cart,
    addItem,
    clearCart,
    calcTotal,
    calcTotalUni,
    removeItem
  }

  return (
    <Provider value={contextValue}>
      {children}
    </Provider>
  )
}

export default MyProvider