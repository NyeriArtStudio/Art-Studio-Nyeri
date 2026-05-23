import { Link } from "react-router-dom";
import {
  Palette,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { counties } from "@/data/counties";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Service areas */}
      <div className="bg-emerald-900/50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <p className="text-xs text-emerald-200 text-center">
            Serving all 10 Mt. Kenya counties + countrywide delivery via
            EasyCoach, 2NK, Nanyuki Cabs &amp; Wells Fargo
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-lg flex items-center justify-center">
                <Palette className="text-white" size={18} />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">Nyeri Art Studio</h3>
                <p className="text-emerald-400 text-[10px] uppercase tracking-wide">
                  Print &amp; Branding Experts
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Your one-stop print shop in the heart of Mt. Kenya. From banners
              to branded apparel, we bring your ideas to life with quality and
              speed.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-emerald-700 rounded-full flex items-center justify-center transition"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-emerald-700 rounded-full flex items-center justify-center transition"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-emerald-700 rounded-full flex items-center justify-center transition"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-emerald-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-emerald-400 transition"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/catalog"
                  className="hover:text-emerald-400 transition"
                >
                  Shop Products
                </Link>
              </li>
              <li>
                <Link to="/custom" className="hover:text-emerald-400 transition">
                  Custom Order
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-emerald-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Areas served */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              Areas We Serve
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
              {counties.map((c) => (
                <span key={c.slug} className="hover:text-emerald-400 transition cursor-default">
                  {c.name}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                <span>
                  Nyeri Art Studio, Kimathi Way,
                  <br />
                  Nyeri Town, Kenya
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-emerald-400 shrink-0" />
                <a
                  href="tel:+254712345678"
                  className="hover:text-emerald-400 transition"
                >
                  0712 345 678
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-emerald-400 shrink-0" />
                <a
                  href="mailto:info@nyeristudio.co.ke"
                  className="hover:text-emerald-400 transition"
                >
                  info@nyeristudio.co.ke
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} className="text-emerald-400 shrink-0" />
                <span>Mon–Sat: 8:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Nyeri Art Studio. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <span className="hover:text-gray-300 cursor-pointer transition">
              Privacy Policy
            </span>
            <span className="hover:text-gray-300 cursor-pointer transition">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
