import {Route, Routes} from "react-router-dom";
import styles from "./App.module.css"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Catalog from "./components/Catalog/Catalog";
import Cart from "./components/Cart/Cart";

function App() {
  return (
      <div>
        <div className={styles.content}>
          <Header/>
          <Routes>
            <Route path="/" element={<Catalog/>}/>
            <Route path="/catalog" element={<Catalog/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </div>
        <Footer/>
      </div>
  );
}

export default App;
