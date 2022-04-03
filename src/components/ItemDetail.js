import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({item}) => {

  const [cantidadSel, setCantidadSel] = useState(0)
  const { addItem } = useContext(CartContext)
  const onAdd = (cantidadSel) => {
    setCantidadSel(cantidadSel)
    addItem(item, cantidadSel)
  }

  return (
    <>
      <div className="item-detail" id={item.id}>
        <img src={item.image} alt="" />
        <div className="titulos">
          <h3>{item.title}</h3>
          <p>${item.price}</p>
          <div>
            <Rate allowHalf count={5} value={item.rating?.rate}/>
            <span>Rates : {item.rating?.count}</span>
          </div>
          <>
            {cantidadSel === 0 ? (
              <ItemCount stock={5} initial={1} onAdd={onAdd} />
            ) : (
              <div className="md-control my-4">
                <h4>Cantidad: {cantidadSel}</h4>
                <Link to="/cart">Ir al carrito</Link>
              </div>
            )
            }
          </>
        </div>
        <p className="descripcion">{item.description}</p>
      </div>
    </>
  )
}

export default ItemDetail