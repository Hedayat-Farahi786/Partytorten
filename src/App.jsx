import "./App.css";
import ProductsList from "./components/ProductsList";
import Carousel from "./components/Carousel";
import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import Sales from "./components/Sales";
import Services from "./components/Services";
import Banner from "./components/Banner";
import SmallProductsView from "./components/SmallProductsView";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Services />
      <Categories />
      <ProductsList title="Best Sellers" />
      <Sales />
      <ProductsList title="Our Featured" />
      <Banner />
      <SmallProductsView />
      <Footer/>
    </div>
  );
}

export default App;
