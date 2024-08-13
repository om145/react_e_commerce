import "./App.css";
import Api from "./components/NavbarContent/Api";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/NavbarContent/Home";
import Category from "./components/NavbarContent/Category";
// import Api from "./components/NavbarContent/Api";
import AboutUs from "./components/NavbarContent/About";
import ContactUs from "./components/NavbarContent/ContactUs";
import LogIn from "./components/NavbarContent/LogIn";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import TermAndCondition from "./components/Footer/TermAndCondition";
import PrivacyPolicy from "./components/Footer/PrivacyPolicy";
import CancellationAndReturn from "./components/Footer/CancellationAndReturn";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/shopping" element={<Api />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/term and condition" element={<TermAndCondition />} />
          <Route path="/privacy policy" element={<PrivacyPolicy />} />
          <Route path="/return" element={<CancellationAndReturn />} />
          <Route path="/cart" element={<Cart />} />



        </Routes>
        <Footer />
      </BrowserRouter>

      <div className="App"></div>
    </>
  );
}

export default App;
