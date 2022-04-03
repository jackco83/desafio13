import { Link } from "react-router-dom"

const Item = ({producto}) => {
  return (
    <div className="item">
      <h2>{producto.title}</h2>
      <figure><img src={producto.image} alt={producto.title} /></figure>
      <p><strong>Precio : ${producto.price}</strong></p>
      <p className="mb-0"><Link className="btn-detalle" to={`/item/${producto.id}`}>Ver detalle</Link></p>
    </div>
  )
}

export default Item