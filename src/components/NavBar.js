import "./navbar.scss"
import CartWidget from "./CartWidget"
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <header className="main-header">
      <h1 className="py-4 mb-0"><Link to="/">Mi Tienda Virtual</Link></h1>
      <nav className="main-nav">
        <ul>
        <li>
            <NavLink to="/">All</NavLink>
          </li>
          <li>
            <NavLink to="/category/electronics">Electronics</NavLink>
          </li>
          <li>
            <NavLink to="/category/jewelery">Jewelery</NavLink>
          </li>
          <li>
            <NavLink to="/category/men's clothing">Men's clothing</NavLink>
          </li>
          <li>
            <NavLink to="/category/women's clothing">Women's clothing</NavLink>
          </li>
        </ul>
      </nav>
      <CartWidget/>
    </header>
  )}

export default NavBar