import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Product from "./pages/Product"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div>

      <nav>
        <Navbar />
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App