import ItemDetail from "./ItemDetail"
import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import { useParams } from "react-router-dom"
import { db } from "../firebase/firebase"
import { collection, query, where, getDocs } from "firebase/firestore"

const ItemDetailContainer = () => {

  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(true)
  const {itemId} = useParams()

  useEffect(() => {

    const prodCollection = collection(db, "productos")
    const filtro = query(prodCollection, where("id", "==", Number(itemId)))
    const consulta = getDocs(filtro)

    consulta
      .then(resultado => setItem(resultado.docs[0].data()))
      .catch(() => toast.error("Error al cargar los productos"))
      .finally(() => setLoading(false))

  },[itemId])

  return (
    <>
      {loading ? <h1 className="load">Cargando...</h1> : <ItemDetail item={item} />}
    </>
  )
}

export default ItemDetailContainer