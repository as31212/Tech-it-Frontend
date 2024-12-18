import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  Nav  from "./components/Nav";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Products } from "./pages/Products";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { About } from "./pages/About";
import { ProductDetails } from "./pages/ProductDetails";
import { Wishlist } from "./pages/Wishlist";
import { useEffect } from "react";
import useRetrieveUser from "./hooks/useRetrieveUser";
import Footer from "./components/Footer";
import ProductModal from "./components/ProductModal";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";


function App() {
  const { retrieveUser } = useRetrieveUser();
  useEffect(() => {
    //retrieves user data from local storage
    retrieveUser();
  }, []);

  // todo this is where the session handling will go
  

  return (
    <>
      <Router>
        <Nav />
        <ProductModal/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Wishlist/:id" element={<Wishlist />} />
          <Route path="/About" element={<About />} />
          <Route path="/Products" element={<Products />}/>
          <Route path="/Products/:id" element={<ProductDetails />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Settings" element={<Settings />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
