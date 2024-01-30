import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/Mainpage";
import ProductsPages from "./pages/ProductsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <Header />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/ürünler" element={<ProductsPages />} />
          <Route path="/ürün/:id" element={<ProductDetail />} />

          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
