import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import { Cart } from "./pages/Cart";
import ProductCategory from "./pages/ProductCategory";
import 'bootstrap/dist/css/bootstrap.min.css';

const MALE = 'Male'
const FEMALE = 'Female'
const SHOES = 'Shoes'
const HATS = 'Hats'
const CLOTHES = 'Clothes'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/mans/Clothes" element={<ProductCategory genderType={MALE} productType={CLOTHES}/>}></Route>
          <Route path="/mans/Shoes" element={<ProductCategory genderType={MALE} productType={SHOES}/>}></Route>
          <Route path="/mans/Hats" element={<ProductCategory genderType={MALE} productType={HATS}/>}></Route>
          <Route path="/womens/Clothes" element={<ProductCategory genderType={FEMALE} productType={CLOTHES}/>}></Route>
          <Route path="/womens/Shoes" element={<ProductCategory genderType={FEMALE} productType={SHOES}/>}></Route>
          <Route path="/womens/Hats" element={<ProductCategory genderType={FEMALE} productType={HATS}/>}></Route>
          <Route path="cart" element={<Cart/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
