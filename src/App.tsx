import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Products } from "./pages/Products";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { About } from "./pages/About";
import { ProductDetails } from "./pages/ProductDetails";
import { Wishlist } from "./pages/Wishlist";
import { Loading } from "./pages/Loading";
import { useEffect } from "react";
import useRetrieveUser from "./hooks/useRetrieveUser";

function App() {

  const {retrieveUser} = useRetrieveUser();
  useEffect(()=>{ //retrieves user data from local storage
    retrieveUser();
  },[]);


  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Loading" element={<Loading />} />
          <Route path="/Wishlist/:id" element={<Wishlist />} />

          <Route path="/About" element={<About />} />
          <Route path="/Products" element={<Products />}>
            <Route path=":id" element={<ProductDetails />} />
          </Route>
          <Route path="/Login" element={<Login />} />
          <Route path="/Cart/:id" element={<Cart />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
