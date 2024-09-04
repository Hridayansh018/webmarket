import react from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Collection from './pages/Collection.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import Cart from './pages/Cart.jsx'
import Login from './pages/Login.jsx'
import Orders from './pages/Orders.jsx'
import PlaceOrder from './pages/PlaceOrder.jsx'
import Product from './pages/Product.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import SearchBar from './components/SearchBar.jsx'


function App() {
2

  return (
    <>

    <Navbar />
    <SearchBar/>

    <div className="px-[3vw] md:px-[7vw] lg:px-[9vw]">

    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/placeorder" element={<PlaceOrder />} />
      <Route path="/product:productId" element={<Product />} />

    </Routes>

    <Footer />

    </div>

    </>
  )
}

export default App
