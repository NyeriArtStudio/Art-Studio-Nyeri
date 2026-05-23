import { useState, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useCurrency } from "@/hooks/useCurrency";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HomePage from "@/pages/HomePage";
import ServicesPage from "@/pages/ServicesPage";
import CatalogPage from "@/pages/CatalogPage";
import CustomOrderPage from "@/pages/CustomOrderPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";

function App() {
  const { currency, currencies, setCurrency, formatPrice } = useCurrency();
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = useCallback((_id: string, qty?: number) => {
    setCartCount((prev) => prev + (qty || 1));
  }, []);

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar
          currency={currency}
          currencies={currencies}
          onCurrencyChange={setCurrency}
          cartCount={cartCount}
        />
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  formatPrice={formatPrice}
                  onAddToCart={handleAddToCart}
                />
              }
            />
            <Route
              path="/services"
              element={<ServicesPage formatPrice={formatPrice} />}
            />
            <Route
              path="/catalog"
              element={
                <CatalogPage
                  formatPrice={formatPrice}
                  onAddToCart={handleAddToCart}
                />
              }
            />
            <Route
              path="/custom"
              element={<CustomOrderPage />}
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
