import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Products from "./components/Products";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Marque from "./components/Marque";
import Contact from "./components/Contact";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import Details from "./Pages/Details";
import { Provider } from "react-redux"; 
import store from "./store/Store";
import "./App.css";
import{ BrowserRouter, Route, Routes } from "react-router-dom";
import ProDetails from "./Pages/ProDetails";

function App() {
  return (
    <div className="App">
  {/* <Context> */}
   
   <Provider store={store}> {/*provier from react redux help to inject store into appliocation */}
  <BrowserRouter>
    <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/products" element={<ProDetails />}>   
          </Route> 
          <Route path="/contact" element={<Contact />}>   
          </Route> 
          <Route path="/about" element={<About />}>   
          </Route> 
          <Route path="/detail" element={<Details />}>   
          </Route> 
        </Routes>
       
        </BrowserRouter>
      {/* </Context> */}
      <Footer/> 
  </Provider>
   
    </div>
  );
}

export default App;
