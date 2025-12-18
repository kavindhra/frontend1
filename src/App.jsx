import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 ShopHub. All rights reserved.</p>
          <p>Premium Electronics & Accessories Store</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
