import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronUp,
  PenTool,
  Layers,
  Shirt,
  Truck,
  Building,
  Gift,
  Printer,
  Frame,
} from "lucide-react";
import { products } from "@/data/products";

const serviceCollections = [
  {
    id: "brand-visibility",
    title: "Make Your Brand Seen",
    tagline: "Outdoor, Events & Vehicle Branding",
    icon: Truck,
    image: "/images/service-banners.jpg",
    color: "from-orange-500 to-red-600",
    bgColor: "bg-orange-50",
    description:
      "Large-format printing solutions that command attention. From roadside banners to fully-wrapped vehicles, we ensure your brand is impossible to miss across Nyeri, Karatina, Meru, Embu, and beyond.",
    items: products.filter((p) => p.category === "banners"),
  },
  {
    id: "wear-your-brand",
    title: "Wear Your Brand",
    tagline: "Apparel, Uniforms & Team Wear",
    icon: Shirt,
    image: "/images/service-apparel.jpg",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    description:
      "Turn your team, customers, and fans into walking billboards. Premium heat transfer and sublimation printing on cotton, polyester, and blended fabrics for T-shirts, hoodies, caps, and full uniform sets.",
    items: products.filter((p) => p.category === "apparel"),
  },
  {
    id: "corporate-essentials",
    title: "Corporate Essentials",
    tagline: "Business Cards, Flyers & Office Prints",
    icon: Building,
    image: "/images/service-documents.jpg",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
    description:
      "Professional printed materials that make your business credible and memorable. From premium business cards to comprehensive company profiles — everything your office needs to look sharp.",
    items: products.filter((p) => p.category === "corporate"),
  },
  {
    id: "gifts-merch",
    title: "Gifts & Merchandise",
    tagline: "Branded Products That People Love",
    icon: Gift,
    image: "/images/catalog-mugs.jpg",
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-50",
    description:
      "Create memorable branded gifts and promotional items that your customers will actually use and keep. Perfect for corporate giveaways, wedding souvenirs, and retail merchandise.",
    items: products.filter((p) => p.category === "gifts"),
  },
  {
    id: "documents-more",
    title: "Documents & Everyday Prints",
    tagline: "Photocopying, Binding, Posters & More",
    icon: Printer,
    image: "/images/service-documents.jpg",
    color: "from-violet-500 to-purple-600",
    bgColor: "bg-violet-50",
    description:
      "Your everyday printing needs covered with speed and quality. School materials, office documents, certificates, canvas prints, and custom stickers — all under one roof in Nyeri Town.",
    items: products.filter((p) => p.category === "documents"),
  },
  {
    id: "custom-creations",
    title: "Custom Creations",
    tagline: "Metalwork, Design & Full Event Packages",
    icon: Frame,
    image: "/images/service-signage.jpg",
    color: "from-amber-500 to-yellow-600",
    bgColor: "bg-amber-50",
    description:
      "When off-the-shelf won't cut it, our custom fabrication and design services step in. Welded metal frames, professional graphic design, personalized photo gifts, and complete event branding packages.",
    items: products.filter((p) => p.category === "custom"),
  },
];

export default function ServicesPage({ formatPrice }: { formatPrice: (kes: number) => string }) {
  const [expanded, setExpanded] = useState<string | null>("brand-visibility");

  return (
    <div className="min-h-screen bg-white">
      <title>Our Services | Nyeri Art Studio — Print & Branding</title>
      <meta
        name="description"
        content="Full range of printing services: banners, T-shirts, business cards, signage, vehicle branding, mugs, corporate gifts, documents, and custom fabrication. Serving Nyeri, Meru, Embu & all of Kenya."
      />

      {/* Header */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-emerald-400 text-sm mb-3">
            <Layers size={16} />
            <span className="uppercase tracking-wide font-medium">Our Services</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Everything Your Brand Needs
          </h1>
          <p className="text-gray-300 max-w-2xl text-lg">
            From concept to completion — banners, apparel, signage, corporate
            stationery, gifts, and custom fabrication. All done in-house at our
            Nyeri studio with fast turnaround and countrywide delivery.
          </p>
        </div>
      </div>

      {/* How it works */}
      <div className="bg-emerald-50 border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { step: "1", label: "Choose Service", desc: "Browse our categories" },
              { step: "2", label: "Upload Design", desc: "Or let us design for you" },
              { step: "3", label: "We Print", desc: "Quality in-house production" },
              { step: "4", label: "Delivered", desc: "Pick up or countrywide shipping" },
            ].map((s) => (
              <div key={s.step} className="flex flex-col items-center">
                <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm mb-2">
                  {s.step}
                </div>
                <p className="font-semibold text-gray-900 text-sm">{s.label}</p>
                <p className="text-gray-500 text-xs">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Collections */}
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-6">
        {serviceCollections.map((collection) => {
          const isOpen = expanded === collection.id;
          return (
            <div
              key={collection.id}
              className={`rounded-2xl border overflow-hidden transition ${
                isOpen ? "border-emerald-200 shadow-lg" : "border-gray-200 shadow-sm"
              }`}
            >
              {/* Collection Header */}
              <button
                onClick={() => setExpanded(isOpen ? null : collection.id)}
                className="w-full flex items-center gap-4 p-5 md:p-6 text-left hover:bg-gray-50 transition"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${collection.color} flex items-center justify-center shrink-0`}
                >
                  <collection.icon size={26} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl font-bold text-gray-900">
                    {collection.title}
                  </h2>
                  <p className="text-gray-500 text-sm">{collection.tagline}</p>
                </div>
                <div className="shrink-0 text-gray-400">
                  {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>
              </button>

              {/* Expanded Content */}
              {isOpen && (
                <div className="border-t border-gray-100">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-5 md:p-6">
                    {/* Description + Image */}
                    <div className="lg:col-span-1">
                      <img
                        src={collection.image}
                        alt={collection.title}
                        className="w-full h-48 object-cover rounded-xl mb-4"
                        loading="lazy"
                      />
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {collection.description}
                      </p>
                      <Link
                        to="/custom"
                        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm font-medium bg-gradient-to-r ${collection.color} hover:opacity-90 transition`}
                      >
                        <PenTool size={16} /> Order Custom {collection.title}
                      </Link>
                    </div>

                    {/* Service Items Table */}
                    <div className="lg:col-span-2">
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-gray-200">
                              <th className="text-left py-3 px-3 font-semibold text-gray-700">
                                Service
                              </th>
                              <th className="text-left py-3 px-3 font-semibold text-gray-700 hidden sm:table-cell">
                                Starting Price
                              </th>
                              <th className="text-left py-3 px-3 font-semibold text-gray-700 hidden md:table-cell">
                                Turnaround
                              </th>
                              <th className="text-right py-3 px-3 font-semibold text-gray-700">
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {collection.items.map((item) => (
                              <tr
                                key={item.id}
                                className="border-b border-gray-100 hover:bg-gray-50 transition"
                              >
                                <td className="py-3 px-3">
                                  <p className="font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                  <p className="text-gray-500 text-xs line-clamp-1">
                                    {item.description}
                                  </p>
                                  <div className="flex flex-wrap gap-1 mt-1 sm:hidden">
                                    {item.customization.slice(0, 2).map((c) => (
                                      <span
                                        key={c}
                                        className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded"
                                      >
                                        {c}
                                      </span>
                                    ))}
                                  </div>
                                </td>
                                <td className="py-3 px-3 text-emerald-700 font-semibold hidden sm:table-cell">
                                  {formatPrice(item.priceKES)}
                                  <span className="text-gray-400 font-normal text-xs">
                                    {" "}
                                    /{item.unit}
                                  </span>
                                </td>
                                <td className="py-3 px-3 text-gray-500 hidden md:table-cell">
                                  <span className="inline-flex items-center gap-1">
                                    <Check
                                      size={12}
                                      className="text-emerald-500"
                                    />
                                    {item.turnaround}
                                  </span>
                                </td>
                                <td className="py-3 px-3 text-right">
                                  <Link
                                    to={`/catalog?product=${item.id}`}
                                    className="text-emerald-600 hover:text-emerald-700 font-medium text-xs flex items-center justify-end gap-1"
                                  >
                                    View <ArrowRight size={12} />
                                  </Link>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Equipment showcase */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-10">
            Our Equipment — Professional Grade
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "1.8m Extreme XP600",
                type: "Large Format Printer",
                specs: "Eco-solvent, 1.8m width, up to 1440 DPI",
                status: "Active",
                image: "/images/service-banners.jpg",
              },
              {
                name: "2-ft Flatbed Heat Press",
                type: "Heat Transfer Machine",
                specs: "For T-shirts, caps, mugs, and flat substrates",
                status: "Active",
                image: "/images/service-apparel.jpg",
              },
              {
                name: "50L Air Compressor",
                type: "Pneumatic Power",
                specs: "Powers spray guns, pneumatic tools",
                status: "Active",
                image: "/images/service-signage.jpg",
              },
              {
                name: "Stick Welder (ARC)",
                type: "Welding Equipment",
                specs: "For signposts, frames, metal fabrication",
                status: "Active",
                image: "/images/service-signage.jpg",
              },
              {
                name: "4ft Cutter Plotter (120cm)",
                type: "Precision Cutter",
                specs: "Contour cut, vinyl, HTV, cardstock",
                status: "Planned",
                image: "/images/catalog-wall.jpg",
              },
              {
                name: "High-PPM Photocopier",
                type: "A3/A4 Multifunction",
                specs: "Fast B&W and color printing, scanning",
                status: "Planned",
                image: "/images/service-documents.jpg",
              },
            ].map((eq) => (
              <div
                key={eq.name}
                className="bg-white/5 border border-white/10 rounded-xl overflow-hidden"
              >
                <img
                  src={eq.image}
                  alt={eq.name}
                  className="w-full h-36 object-cover opacity-80"
                  loading="lazy"
                />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-emerald-400 font-medium">
                      {eq.type}
                    </span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                        eq.status === "Active"
                          ? "bg-emerald-500/20 text-emerald-400"
                          : "bg-amber-500/20 text-amber-400"
                      }`}
                    >
                      {eq.status}
                    </span>
                  </div>
                  <h3 className="font-bold text-sm mb-1">{eq.name}</h3>
                  <p className="text-gray-400 text-xs">{eq.specs}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
