import { Home } from "./pages/home/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Shop } from "./components/shop/Shop";
import { Cart } from "./pages/cart/Cart";
import { Contact } from "./pages/contact/Contact";
import { Track } from "./pages/track/Track";
import { Collections } from "./components/collections/Collections";
import { Searchbar } from "./components/search/Searchbar";


function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shopAll" element={<Shop/>} />
          <Route path="/collections" element={<Collections/>} />
          <Route path="/contactUs" element={<Contact />} />
          <Route path="/trackYourOrder" element={<Track />} />
          <Route path="/search" element={<Searchbar />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
