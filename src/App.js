import { Route, Routes } from "react-router-dom";
import "./App.css";

import Cards1 from "./Components/Cards1";
import Footer from "./Components/Footer";
import FreshExotic from "./Components/FreshExotic";
import FreshOrganic from "./Components/FreshOrganic";
import Main1 from "./Components/Main1";
import Navbar from "./Components/Navbar";

import Shop from "./Components/Shop";
import ShopDetail from "./Components/ShopDetail";
import TestimonalBox from "./Components/TestimonalBox";
import CartProduct from "./CartProduct";
import { ProductProvider } from "./Components/ProductContext";
function App() {
  // const navigate = useNavigate();
  return (
    <>
      <ProductProvider>
        <Navbar />

        <Routes>
          <Route path="" element={<Main1 />} />
          <Route path="/Cards1" element={<Cards1 />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/FreshOrganic" element={<FreshOrganic />} />
          <Route path="/FreshExotic" element={<FreshExotic />} />
          <Route path="/ShopDetail" element={<ShopDetail />} />
          <Route path="/TestimonalBox" element={<TestimonalBox />} />
          <Route path="/cart" element={<CartProduct />} />
          <Route path="" element={<Footer />} />
        </Routes>
      </ProductProvider>
    </>
  );
}

export default App;
