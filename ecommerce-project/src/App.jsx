import HomePage from "./pages/HomePage";
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import { Checkoutpage } from "./pages/Checkoutpage";
import { OrderPage } from "./pages/OrderPage";
import { TrackingPage } from "./pages/TrackingPage";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/api/cart-items").then((response) => {
      setCart(response.data || []);
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage cart={cart} />} />
      <Route path="checkout" element={<Checkoutpage cart={cart} />} />
      <Route path="orders" element={<OrderPage />} />
      <Route path="tracking" element={<TrackingPage />} />
    </Routes>
  );
}

export default App;
