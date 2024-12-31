import { Routes, Route } from "react-router-dom"
import { Home, Collection, Policy, Cart, Contact, About, Orders, PlaceOrder, Product } from "./paths"
// import Login from "./pages/Login"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import SearchBar from "./components/SearchBar"
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer />
      <Navbar />
      {/*  Here mounting the navbar above the routes bcoz it should be available to all routes*/}
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/Login" element={<Login />} /> */}
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/policy" element={<Policy />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App