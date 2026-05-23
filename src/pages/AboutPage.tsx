import {
  Target,
  Eye,
  Heart,
  Zap,
  Award,
  Users,
  MapPin,
  TrendingUp,
} from "lucide-react";
import { counties } from "@/data/counties";

const values = [
  {
    icon: Target,
    title: "Quality First",
    desc: "We never compromise on materials, equipment, or craftsmanship. Every product that leaves our studio meets our strict quality standards.",
  },
  {
    icon: Zap,
    title: "Speed & Reliability",
    desc: "Same-day to 3-day turnaround on most orders. We understand that deadlines matter — your event won't wait, and neither will we.",
  },
  {
    icon: Heart,
    title: "Customer Obsessed",
    desc: "From design consultation to after-sales support, we're with you every step. Your satisfaction isn't just a goal — it's our guarantee.",
  },
  {
    icon: Award,
    title: "Continuous Innovation",
    desc: "We invest in the latest printing technology and techniques. Phase 2 brings a cutter plotter and high-speed photocopier to serve you even better.",
  },
];

const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "10", label: "Counties Served" },
  { value: "50+", label: "Products Offered" },
  { value: "24hr", label: "Avg. Turnaround" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <title>About Us | Nyeri Art Studio — Print Shop in Mt. Kenya</title>
      <meta
        name="description"
        content="Learn about Nyeri Art Studio — your trusted print and branding partner in the Mt. Kenya region. Quality printing, fast turnaround, countrywide delivery."
      />

      {/* Hero */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero.jpg"
            alt="Nyeri Art Studio workshop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-emerald-400 text-sm mb-4">
              <Users size={16} />
              <span className="uppercase tracking-wide font-medium">
                About Us
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nyeri Art Studio
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              The Mt. Kenya region&apos;s trusted partner for professional
              printing, branding, and custom fabrication. Based in Nyeri Town,
              delivering quality to all 47 counties.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Nyeri Art Studio was born from a simple observation: businesses
                  and individuals across the Mt. Kenya region deserved access to
                  professional-grade printing and branding services without
                  traveling to Nairobi or settling for subpar quality.
                </p>
                <p>
                  Starting with a single 1.8m large format printer and a
                  heat press machine in a small workshop in Nyeri Town, we set
                  out to bridge that gap. Today, we serve clients across Nyeri,
                  Meru, Embu, Kirinyaga, Murang&apos;a, Laikipia, Nyandarua,
                  Tharaka-Nithi, Kiambu, and Nakuru — with countrywide delivery
                  to every corner of Kenya.
                </p>
                <p>
                  Our Phase 2 expansion will introduce precision vinyl cutting
                  and high-volume document services, making us the most
                  comprehensive print shop in the entire Mt. Kenya region.
                </p>
                <p className="font-medium text-gray-800">
                  We don&apos;t just print — we bring your brand to life.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/service-banners.jpg"
                alt="Large format printing at Nyeri Art Studio"
                className="rounded-2xl shadow-lg"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 bg-emerald-600 text-white p-5 rounded-xl shadow-lg">
                <p className="text-3xl font-bold">6+</p>
                <p className="text-sm">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-emerald-900 py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-bold text-white mb-1">{s.value}</p>
                <p className="text-emerald-300 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                <Target size={24} className="text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses, schools, churches, and individuals across
                the Mt. Kenya region with world-class printing and branding
                solutions that are affordable, accessible, and delivered with
                exceptional speed and quality.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Eye size={24} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To become the leading print and branding studio in East Africa,
                recognized for innovation, quality, and customer satisfaction —
                a brand that every Kenyan trusts to bring their ideas to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              What Drives Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our core values guide every decision, every print, and every
              interaction with our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition text-center"
              >
                <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <v.icon size={28} className="text-emerald-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas served */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Proudly Serving the Mt. Kenya Region
            </h2>
            <p className="text-gray-600">
              We deliver to every county — from our home base in Nyeri to the
              farthest corners of Kenya.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {counties.map((county) => (
              <div
                key={county.slug}
                className="bg-white rounded-xl p-4 border border-gray-100 flex items-start gap-3"
              >
                <MapPin size={18} className="text-emerald-500 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">
                    {county.name}
                  </h4>
                  <p className="text-gray-500 text-xs mt-0.5">
                    {county.towns.join(", ")}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center p-4 bg-emerald-50 rounded-xl">
            <div className="flex items-center justify-center gap-2 text-emerald-700 font-medium">
              <TrendingUp size={18} />
              <span>Countrywide delivery available to all 47 counties</span>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Our Equipment
            </h2>
            <p className="text-gray-600">
              Professional-grade machinery for professional-grade results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "1.8m Extreme XP600",
                type: "Large Format Printer",
                status: "Active",
                desc: "Eco-solvent printing up to 1.8m wide. Banners, vehicle wraps, wall murals, backlit film.",
                image: "/images/service-banners.jpg",
              },
              {
                name: "2-ft Flatbed Heat Press",
                type: "Heat Transfer",
                status: "Active",
                desc: "T-shirts, hoodies, caps, mugs, tote bags, and flat substrates. Durable, vibrant prints.",
                image: "/images/service-apparel.jpg",
              },
              {
                name: "50L Air Compressor",
                type: "Pneumatic Tools",
                status: "Active",
                desc: "Powers spray painting, pneumatic tools, and air-powered equipment for fabrication.",
                image: "/images/service-signage.jpg",
              },
              {
                name: "Stick Welder (ARC)",
                type: "Metal Fabrication",
                status: "Active",
                desc: "Custom signposts, banner frames, brackets, and structural metal signage.",
                image: "/images/service-signage.jpg",
              },
              {
                name: "4ft Cutter Plotter",
                type: "Precision Cutting",
                status: "Coming Soon",
                desc: "Contour-cut vinyl, HTV, labels, stickers, and precision graphics. Phase 2 investment.",
                image: "/images/catalog-wall.jpg",
              },
              {
                name: "High-PPM Photocopier",
                type: "Document Center",
                status: "Coming Soon",
                desc: "High-speed A3/A4 B&W and color printing, scanning, laminating, and binding. Phase 2.",
                image: "/images/service-documents.jpg",
              },
            ].map((eq) => (
              <div
                key={eq.name}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition"
              >
                <img
                  src={eq.image}
                  alt={eq.name}
                  className="w-full h-40 object-cover"
                  loading="lazy"
                />
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-emerald-600 font-medium uppercase">
                      {eq.type}
                    </span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                        eq.status === "Active"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {eq.status}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{eq.name}</h3>
                  <p className="text-gray-500 text-sm">{eq.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
