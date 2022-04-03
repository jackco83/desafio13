import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { Container, Row, Col } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import Cart from "./components/Cart"
import MyProvider from "./context/CartContext"

const App = () => {

  return (
    <BrowserRouter>
      <MyProvider>
        <NavBar/>
        <Container as="main" className="my-4" fluid>
          <Row>
            <Col>
              <Routes>
                <Route path="/" element={<ItemListContainer/>} />
                <Route path="/category/:categoryId" element={<ItemListContainer/>} />
                <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
                <Route path="/cart" element={<Cart/>}/>
              </Routes>
            </Col>
          </Row>
        </Container>
      </MyProvider>
      <Footer/>
      <ToastContainer />
    </BrowserRouter>
  )

}

export default App