import { Link } from "react-router-dom";
import {
  ArrowRight,
  Signpost,
  Shirt,
  Briefcase,
  Gift,
  FileText,
  PenTool,
  Truck,
  Zap,
  Award,
  Headphones,
  Star,
  TrendingUp,
  MapPin,
  Phone,
} from "lucide-react";
import { trendingProducts } from "@/data/products";
import { counties } from "@/data/counties";

interface HomeProps {
  formatPrice: (kes: number) => string;
  onAddToCart: (id: string) => void;
}

const serviceGroups = [
  {
    title: "Make Your Brand Seen",
    subtitle: "Large Format & Signage",
    icon: Signpost,
    image: "/images/service-banners.jpg",
    description:
      "Banners, roll-ups, vehicle wraps, wall murals, and signposts that grab attention and communicate your message loud and clear.",
    link: "/services",
    items: ["Flex Banners", "Roll-Up Banners", "Vehicle Branding", "Wall Murals", "Signposts"],
  },
  {
    title: "Wear Your Brand",
    subtitle: "Apparel & Uniforms",
    icon: Shirt,
    image: "/images/service-apparel.jpg",
    description:
      "From custom T-shirts and hoodies to safety vests and team jerseys. Heat transfer and sublimation for vibrant, lasting prints.",
    link: "/services",
    items: ["T-Shirts", "Hoodies", "Caps", "Uniforms", "Jerseys"],
  },
  {
    title: "Corporate Essentials",
    subtitle: "Office & Business Prints",
    icon: Briefcase,
    image: "/images/service-documents.jpg",
    description:
      "Business cards, flyers, brochures, booklets, letterheads, and certificates that make your business look polished and professional.",
    link: "/services",
    items: ["Business Cards", "Flyers", "Brochures", "Booklets", "Certificates"],
  },
  {
    title: "Gifts & Merch",
    subtitle: "Branded Products",
    icon: Gift,
    image: "/images/catalog-mugs.jpg",
    description:
      "Branded mugs, tote bags, water bottles, notebooks, and keyholders. Perfect for giveaways, corporate gifts, and souvenirs.",
    link: "/catalog",
    items: ["Mugs", "Tote Bags", "Water Bottles", "Notebooks", "Keyholders"],
  },
  {
    title: "Documents & More",
    subtitle: "Daily Print Services",
    icon: FileText,
    image: "/images/catalog-corporate.jpg",
    description:
      "Photocopying, laminating, binding, posters, canvas prints, and custom stickers. Fast turnaround for all your document needs.",
    link: "/services",
    items: ["Photocopying", "Laminating", "Binding", "Posters", "Stickers"],
  },
  {
    title: "Custom Creations",
    subtitle: "Design & Fabrication",
    icon: PenTool,
    image: "/images/service-signage.jpg",
    description:
      "Metal fabrication, graphic design, photo gifts, and complete event branding packages. If you can imagine it, we can create it.",
    link: "/custom",
    items: ["Metal Frames", "Graphic Design", "Photo Gifts", "Event Packages"],
  },
];

const features = [
  { icon: Truck, title: "Countrywide Delivery", desc: "We ship to all 47 counties via reliable courier partners" },
  { icon: Zap, title: "Fast Turnaround", desc: "Same-day to 3-day delivery depending on your order" },
  { icon: Award, title: "Premium Quality", desc: "Top-grade materials and professional-grade equipment" },
  { icon: Headphones, title: "Expert Support", desc: "Design help and consultation every step of the way" },
];

const testimonials = [
  {
    name: "Grace Wanjiku",
    role: "School Principal",
    location: "Karatina, Nyeri",
    text: "Nyeri Art Studio has been our go-to for all school printing needs. CBC materials, certificates, and branded uniforms — always on time and excellent quality!",
    rating: 5,
  },
  {
    name: "John Mwangi",
    role: "Business Owner",
    location: "Meru Town",
    text: "I ordered roll-up banners and business cards for my hardware shop. The quality exceeded my expectations. Will definitely order again.",
    rating: 5,
  },
  {
    name: "Pastor Peter K",
    role: "Church Leader",
    location: "Embu County",
    text: "They printed 200 branded T-shirts for our church crusade. The colors are vibrant even after multiple washes. God bless your work!",
    rating: 5,
  },
  {
    name: "Faith Njeri",
    role: "Event Planner",
    location: "Nyeri Town",
    text: "The event package I got — backdrop, banners, and programs — made my client's wedding look like a million shillings. Professional service!",
    rating: 5,
  },
];

export default function HomePage({ formatPrice, onAddToCart }: HomeProps) {
  return (
    <div>
      {/* SEO Meta */}
      <title>Nyeri Art Studio | Print Shop & Branding in Mt. Kenya Region</title>
      <meta
        name="description"
        content="Nyeri Art Studio - Professional printing & branding services in Nyeri. Banners, T-shirts, business cards, signage, mugs, and more. Serving Nyeri, Meru, Embu, Kirinyaga, Murang'a & all of Kenya."
      />
      <meta
        name="keywords"
        content="print shop Nyeri, banner printing Kenya, T-shirt branding, business cards Nyeri, signage Mt Kenya, vehicle branding, mug printing, large format printing Nyeri, Karatina printing, Meru branding, Embu print shop"
      />

      {/* ===== HERO ===== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero.jpg"
            alt="Nyeri Art Studio print shop workspace"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-emerald-600/90 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <TrendingUp size={16} />
              <span>Now Delivering Countrywide!</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Your Ideas,{" "}
              <span className="text-emerald-400">Expertly Printed</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Nyeri&apos;s premier print &amp; branding studio. From banners and
              branded apparel to corporate stationery and custom signage — we
              serve the entire Mt. Kenya region and deliver across all 47
              counties.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/catalog"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition flex items-center gap-2"
              >
                Shop Now <ArrowRight size={18} />
              </Link>
              <Link
                to="/custom"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-xl font-semibold transition flex items-center gap-2 backdrop-blur-sm"
              >
                Upload Your Design <PenTool size={18} />
              </Link>
            </div>
            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap gap-6 text-gray-300 text-sm">
              <span className="flex items-center gap-1">
                <Star size={14} className="text-yellow-400" /> 500+ Happy
                Clients
              </span>
              <span className="flex items-center gap-1">
                <Truck size={14} /> Free delivery in Nyeri
              </span>
              <span className="flex items-center gap-1">
                <Zap size={14} /> Same-day printing
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES BAR ===== */}
      <section className="bg-emerald-900 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-3">
                <div className="w-10 h-10 bg-emerald-700/50 rounded-lg flex items-center justify-center shrink-0">
                  <f.icon size={20} className="text-emerald-300" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">{f.title}</h3>
                  <p className="text-emerald-200 text-xs mt-0.5">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICE GROUPS ===== */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Create
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything your brand needs to stand out — from eye-catching
              outdoor signage to premium corporate stationery and wearable
              merchandise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceGroups.map((group) => (
              <Link
                to={group.link}
                key={group.title}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={group.image}
                    alt={group.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <group.icon
                      size={20}
                      className="text-emerald-600"
                    />
                    <span className="text-xs font-medium text-emerald-600 uppercase tracking-wide">
                      {group.subtitle}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition">
                    {group.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {group.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-emerald-600 font-medium text-sm group-hover:gap-2 transition-all">
                    Explore <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRENDING PRODUCTS ===== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
            <div>
              <span className="text-emerald-600 font-medium text-sm uppercase tracking-wide">
                Trending Now
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mt-1">
                Most Popular Products
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Our best-selling items, loved by clients across Mt. Kenya
              </p>
            </div>
            <Link
              to="/catalog"
              className="text-emerald-600 font-medium hover:text-emerald-700 transition flex items-center gap-1"
            >
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingProducts.slice(0, 8).map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition group"
              >
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {product.trending && (
                    <span className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase">
                      Hot
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-xs mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-700 font-bold">
                      {formatPrice(product.priceKES)}
                      <span className="text-gray-400 font-normal text-xs">
                        {" "}
                        /{product.unit}
                      </span>
                    </span>
                    <button
                      onClick={() => onAddToCart(product.id)}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs px-3 py-1.5 rounded-lg transition"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== AREAS SERVED ===== */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Serving the Mt. Kenya Region &amp; Beyond
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We proudly serve all 10 counties of the Mt. Kenya region and
              deliver parcels to all 47 counties in Kenya. Find your town below!
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {counties.map((county) => (
              <div
                key={county.slug}
                className="bg-white rounded-xl p-5 border border-gray-100 hover:border-emerald-200 hover:shadow-md transition"
              >
                <div className="flex items-center gap-2 mb-3">
                  <MapPin size={16} className="text-emerald-600" />
                  <h3 className="font-bold text-gray-900">{county.name}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {county.towns.map((town) => (
                    <span
                      key={town}
                      className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded-md"
                    >
                      {town}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              Don&apos;t see your town? We deliver to{" "}
              <strong>every county in Kenya</strong> via EasyCoach, 2NK Sacco,
              Nanyuki Cabs, Wells Fargo, and other trusted couriers.
            </p>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-16 bg-emerald-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-3">
              What Our Clients Say
            </h2>
            <p className="text-emerald-200">
              Trusted by 500+ businesses, schools, and organizations across the
              region
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-emerald-50 text-sm leading-relaxed mb-4">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-emerald-300 text-xs">
                    {t.role} — {t.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 to-teal-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Bring Your Ideas to Life?
          </h2>
          <p className="text-emerald-100 text-lg mb-8">
            Whether you need a single banner or a full event branding package,
            we&apos;re here to make it happen. Get a free quote today!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/custom"
              className="bg-white text-emerald-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition flex items-center gap-2"
            >
              Start Your Order <ArrowRight size={18} />
            </Link>
            <a
              href="https://wa.me/254712345678"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-800 text-white border border-emerald-500 px-8 py-4 rounded-xl font-bold hover:bg-emerald-900 transition flex items-center gap-2"
            >
              <Phone size={18} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
