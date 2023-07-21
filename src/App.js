import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ManClothes from "./pages/Man`s clothes";
import WomenClothes from "./pages/WomenClothes";
import Jewelery from "./pages/Jewelery";
import Electronics from "./pages/Electronics";
import { Cart } from "./pages/Cart";



function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="mans" element={<ManClothes/>} />
          <Route path="womens" element={<WomenClothes/>} />
          <Route path="jewelery" element={<Jewelery/>} />
          <Route path="electronics" element={<Electronics/>} />
          <Route path="cart" element={<Cart/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
