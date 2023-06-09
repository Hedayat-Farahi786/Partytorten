import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import AllProducts from "./components/AllProducts";
import NotFound from "./components/NotFound";
import Wishlist from "./components/Wishlist";
import ShoppingCart from "./components/ShoppingCart";
import Checkout from "./components/Checkout";
import OrderSummary from "./components/OrderSummary";
import Orders from "./components/Orders";

function App() {
  return (
    <div className="App relative">
        <Navbar />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Main />} />
          <Route path="/shoppingCart" element={<ShoppingCart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orderSummary/:id" element={<OrderSummary />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/allProducts" element={<AllProducts />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
    </div>
  );
}

export default App;
