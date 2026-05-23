import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ShoppingCart,
  Phone,
  MapPin,
  ChevronDown,
  Palette,
} from "lucide-react";
import type { Currency } from "@/hooks/useCurrency";

interface NavbarProps {
  currency: Currency;
  currencies: Currency[];
  onCurrencyChange: (code: string) => void;
  cartCount: number;
}

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Shop", path: "/catalog" },
  { label: "Custom Order", path: "/custom" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar({
  currency,
  currencies,
  onCurrencyChange,
  cartCount,
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {/* Top bar */}
      <div className="bg-emerald-900 text-emerald-50 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone size={12} />
              <a href="tel:+254712345678" className="hover:text-white transition">
                0712 345 678
              </a>
            </span>
            <span className="hidden sm:flex items-center gap-1">
              <MapPin size={12} />
              <span>Nyeri Town, Kenya</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span>We deliver countrywide!</span>
            {/* Currency selector */}
            <div className="relative">
              <button
                onClick={() => setCurrencyOpen(!currencyOpen)}
                className="flex items-center gap-1 bg-emerald-800 hover:bg-emerald-700 px-2 py-1 rounded transition"
              >
                {currency.code} <ChevronDown size={10} />
              </button>
              {currencyOpen && (
                <div className="absolute right-0 top-full mt-1 bg-white text-gray-800 rounded shadow-lg z-50 w-44 py-1">
                  {currencies.map((c) => (
                    <button
                      key={c.code}
                      onClick={() => {
                        onCurrencyChange(c.code);
                        setCurrencyOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs hover:bg-emerald-50 transition ${
                        c.code === currency.code ? "bg-emerald-50 font-semibold" : ""
                      }`}
                    >
                      {c.code} — {c.name} ({c.symbol})
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-white shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-lg flex items-center justify-center">
              <Palette className="text-white" size={22} />
            </div>
            <div className="leading-tight">
              <h1 className="text-lg font-bold text-gray-900 tracking-tight">
                Nyeri Art Studio
              </h1>
              <p className="text-[10px] text-emerald-600 font-medium tracking-wide uppercase">
                Print & Branding
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                  location.pathname === link.path
                    ? "bg-emerald-50 text-emerald-700"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Link
              to="/catalog"
              className="relative p-2 text-gray-600 hover:text-emerald-700 transition"
            >
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>
            <a
              href="https://wa.me/254712345678"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition items-center gap-2"
            >
              <Phone size={14} /> Order Now
            </a>
            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-gray-600"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-3 space-y-1 shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition ${
                  location.pathname === link.path
                    ? "bg-emerald-50 text-emerald-700"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/254712345678"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-600 text-white px-4 py-3 rounded-lg text-sm font-medium mt-2"
            >
              <Phone size={16} /> WhatsApp Order
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
