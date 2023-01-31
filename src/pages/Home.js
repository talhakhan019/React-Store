import Header from "../components/Header";
import Slider from "../components/Slider";
import ProductSlider from "../components/ProductSlider";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../components/Footer";

import poppro from "../productsData/popularproducts";
import gaming from "../productsData/gaming";
function Home() {
    const images = {
      'image1':'./images/slider1.png',
      'image2': './images/slider2.png',
      'image3': './images/slider3.png'
    }
    
    
    return (
      <>
      
      <Slider images = {images}/>
      <ProductSlider title = "Popular Products" list = {poppro}/>
      <ProductSlider title = "Popular Gaming Products" list = {gaming}/>
      
      </>
    );
  }
  
  export default Home;