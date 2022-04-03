import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import { toast } from "react-toastify"
import { db } from "../firebase/firebase"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"

const Cart = () => {
  const { cart, calcTotal, clearCart, removeItem } = useContext(CartContext)

  const finalizarCompra = () => {

    const orden = {
      buyer : {
          nombre : "Jack",
          telefono : "990222600",
          email : "jack@mitiendavirtual.com"
      },
      items : cart,
      date : serverTimestamp(),
      total : calcTotal()
    }

    const ordenesCollection = collection(db, "ordenes")
    const pedido = addDoc(ordenesCollection,orden)

    pedido
      .then(resultado=>{
        console.log(resultado)
        toast.success("Finalizó su compra! Gracias!")
      })
      .catch(error=>{
        toast.error("hubo un error!")
      })
  }

  return (
    <>
      <div className="row">
        <div className="col-lg-12"><h2>Carrito</h2></div>
      </div>
      <div className="row">
        {cart.length === 0 ? (
          <div className="text-center">
            <h3>Aún no tienes productos</h3>
            <Link to="/">Regresar al Home</Link>
          </div>
        ) : (
          <>
            {cart.map(prod => (
              <div key={prod.id} className="col-lg-12">
                <div className="row">
                  <div className="col-lg-3"><figure><img src={prod.image} alt={prod.title} width="150px" /></figure></div>
                  <div className="col-lg-9">
                    <p>Nombre: {prod.title}</p>
                    <p>Cant: {prod.quantity}</p>
                    <p>Precio unitario: ${prod.price}</p>
                    <p>Subtotal : {prod.quantity * prod.price}</p>
                    <button onClick={() => removeItem(prod.id)}>Eliminar producto</button>
                  </div>
                </div>
              </div>
            ))}
            <div className="offset-lg-3 col-lg-9 mt-4">
              <h2>Total: ${calcTotal()}</h2>
              <button onClick={clearCart}>Vaciar cart</button>
              <button onClick={finalizarCompra}>Finalizar la compra</button>
            </div>
          </>
        )
        }
      </div>
    </>
  )
}

export default Cart