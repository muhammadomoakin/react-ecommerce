import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router";
import Checkoutpage from "./pages/Checkoutpage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="checkout" element={<Checkoutpage />} />
    </Routes>
  );
}

export default App;
