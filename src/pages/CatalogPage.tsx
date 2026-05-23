import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Search,
  X,
  TrendingUp,
  ShoppingCart,
  Minus,
  Plus,
  Tag,
  Clock,
  SlidersHorizontal,
  ArrowUpDown,
  Star,
  Sparkles,
  Eye,
} from "lucide-react";
import { products, categories, subcategories, trendingProducts } from "@/data/products";

interface CatalogProps {
  formatPrice: (kes: number) => string;
  onAddToCart: (id: string, qty: number) => void;
}

const sortOptions = [
  { value: "popular", label: "Most Popular" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "name", label: "Name A-Z" },
];

export default function CatalogPage({ formatPrice, onAddToCart }: CatalogProps) {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState(
    searchParams.get("product") ? "all" : "all"
  );
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState("popular");
  const [showFilters, setShowFilters] = useState(false);
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  // Initialize quantity for each product
  useEffect(() => {
    const initial: Record<string, number> = {};
    products.forEach((p) => {
      initial[p.id] = p.minQty;
    });
    setQuantities(initial);
  }, []);

  const handleQtyChange = (id: string, delta: number, minQty: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(minQty, (prev[id] || minQty) + delta),
    }));
  };

  const handleAddToCart = (id: string) => {
    const qty = quantities[id] || products.find((p) => p.id === id)?.minQty || 1;
    onAddToCart(id, qty);
    setAddedIds((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => setAddedIds((prev) => ({ ...prev, [id]: false })), 1500);
  };

  const currentSubcategories = activeCategory !== "all"
    ? subcategories[activeCategory] || []
    : [];

  const filtered = useMemo(() => {
    let result = [...products];

    // Search
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)) ||
          p.subcategory.toLowerCase().includes(q)
      );
    }

    // Category
    if (activeCategory !== "all") {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Subcategory
    if (activeSubcategory) {
      result = result.filter((p) => p.subcategory === activeSubcategory);
    }

    // Sort
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.priceKES - b.priceKES);
        break;
      case "price-high":
        result.sort((a, b) => b.priceKES - a.priceKES);
        break;
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        result.sort((a, b) => (b.trending ? 1 : 0) - (a.trending ? 1 : 0));
    }

    return result;
  }, [search, activeCategory, activeSubcategory, sortBy]);

  const selected = products.find((p) => p.id === selectedProduct);

  return (
    <div className="min-h-screen bg-gray-50">
      <title>Shop | Nyeri Art Studio — Product Catalog</title>
      <meta
        name="description"
        content="Browse and order branded T-shirts, banners, mugs, business cards, signage, corporate gifts, and more. Shop online with countrywide delivery across Kenya."
      />

      {/* ===== TRENDING SECTION (For social media traffic) ===== */}
      {!search && activeCategory === "all" && !activeSubcategory && (
        <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 py-10">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles size={20} />
              <span className="font-bold text-lg">Trending Now — TikTok & Instagram Favorites</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {trendingProducts.slice(0, 5).map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setActiveCategory(p.category);
                    setActiveSubcategory(p.subcategory);
                    window.scrollTo({ top: 400, behavior: "smooth" });
                  }}
                  className="bg-white/15 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/25 transition text-left group"
                >
                  <div className="h-32 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-3">
                    <p className="font-semibold text-sm">{p.name}</p>
                    <p className="text-white/80 text-xs">{formatPrice(p.priceKES)}/{p.unit}</p>
                  </div>
                </button>
              ))}
            </div>
            <p className="text-white/70 text-xs mt-4 text-center">
              These are our most popular items right now — click any to see more like it!
            </p>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-[72px] z-30">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-3">
            {/* Search */}
            <div className="relative flex-1">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products: banners, T-shirts, mugs, business cards..."
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X size={16} />
                </button>
              )}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition text-sm"
              >
                <SlidersHorizontal size={16} /> Filters
              </button>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none pl-4 pr-10 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm bg-white"
                >
                  {sortOptions.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
                <ArrowUpDown
                  size={14}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                />
              </div>
            </div>
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2 mt-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setActiveSubcategory(null);
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition ${
                  activeCategory === cat.id
                    ? "bg-emerald-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Subcategory filters */}
          {showFilters && currentSubcategories.length > 0 && (
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-xs text-gray-500 mb-2">Subcategories:</p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveSubcategory(null)}
                  className={`px-3 py-1 rounded-full text-xs transition ${
                    !activeSubcategory
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-gray-50 text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  All
                </button>
                {currentSubcategories.map((sub) => (
                  <button
                    key={sub}
                    onClick={() => setActiveSubcategory(sub)}
                    className={`px-3 py-1 rounded-full text-xs transition ${
                      activeSubcategory === sub
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-gray-50 text-gray-500 hover:bg-gray-100"
                    }`}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Popular tags */}
          {showFilters && (
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-xs text-gray-500 mb-2">Popular searches:</p>
              <div className="flex flex-wrap gap-2">
                {["banner", "T-shirt", "mug", "business card", "school", "wedding", "corporate", "event"].map(
                  (tag) => (
                    <button
                      key={tag}
                      onClick={() => setSearch(tag)}
                      className="text-xs bg-gray-50 text-gray-500 px-2 py-1 rounded hover:bg-emerald-50 hover:text-emerald-600 transition"
                    >
                      {tag}
                    </button>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <p className="text-sm text-gray-500 mb-4">
          {filtered.length} product{filtered.length !== 1 ? "s" : ""} found
          {activeCategory !== "all" && (
            <span>
              {" "}
              in{" "}
              <span className="font-medium text-gray-700">
                {categories.find((c) => c.id === activeCategory)?.label}
              </span>
            </span>
          )}
          {activeSubcategory && (
            <span className="font-medium text-gray-700">
              {" "}
              &rarr; {activeSubcategory}
            </span>
          )}
          {search && (
            <span>
              {" "}
              for &ldquo;{search}&rdquo;
            </span>
          )}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition group flex flex-col"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {product.trending && (
                  <span className="absolute top-2 left-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                    <TrendingUp size={10} /> TRENDING
                  </span>
                )}
                <button
                  onClick={() => setSelectedProduct(product.id)}
                  className="absolute top-2 right-2 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-sm transition opacity-0 group-hover:opacity-100"
                >
                  <Eye size={14} className="text-gray-600" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4 flex-1 flex flex-col">
                <div className="flex items-center gap-1 mb-1">
                  <Tag size={10} className="text-emerald-500" />
                  <span className="text-[10px] text-emerald-600 font-medium uppercase">
                    {product.subcategory}
                  </span>
                </div>
                <h3
                  className="font-bold text-gray-900 text-sm mb-1 cursor-pointer hover:text-emerald-700 transition"
                  onClick={() => setSelectedProduct(product.id)}
                >
                  {product.name}
                </h3>
                <p className="text-gray-500 text-xs line-clamp-2 mb-3 flex-1">
                  {product.description}
                </p>

                {/* Customization tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {product.customization.slice(0, 3).map((c) => (
                    <span
                      key={c}
                      className="text-[10px] bg-gray-50 text-gray-500 px-1.5 py-0.5 rounded"
                    >
                      {c}
                    </span>
                  ))}
                </div>

                {/* Price & Qty */}
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-emerald-700 font-bold text-lg">
                    {formatPrice(product.priceKES)}
                  </span>
                  <span className="text-gray-400 text-xs">/{product.unit}</span>
                </div>

                {/* Min order */}
                <p className="text-[10px] text-gray-400 mb-2">
                  Min order: {product.minQty} {product.unit}
                </p>

                {/* Quantity selector */}
                <div className="flex items-center gap-2 mb-3">
                  <button
                    onClick={() =>
                      handleQtyChange(
                        product.id,
                        -1,
                        product.minQty
                      )
                    }
                    className="w-8 h-8 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 transition"
                  >
                    <Minus size={12} />
                  </button>
                  <input
                    type="number"
                    value={quantities[product.id] || product.minQty}
                    onChange={(e) => {
                      const val = parseInt(e.target.value) || product.minQty;
                      setQuantities((prev) => ({
                        ...prev,
                        [product.id]: Math.max(product.minQty, val),
                      }));
                    }}
                    className="w-16 text-center border border-gray-200 rounded-lg py-1 text-sm"
                    min={product.minQty}
                  />
                  <button
                    onClick={() =>
                      handleQtyChange(product.id, 1, product.minQty)
                    }
                    className="w-8 h-8 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 transition"
                  >
                    <Plus size={12} />
                  </button>
                  <span className="text-xs text-gray-400">{product.unit}</span>
                </div>

                {/* CTA */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleAddToCart(product.id)}
                    className={`flex-1 py-2 rounded-lg text-sm font-medium transition flex items-center justify-center gap-1 ${
                      addedIds[product.id]
                        ? "bg-green-500 text-white"
                        : "bg-emerald-600 hover:bg-emerald-700 text-white"
                    }`}
                  >
                    {addedIds[product.id] ? (
                      <>
                        <Star size={14} /> Added!
                      </>
                    ) : (
                      <>
                        <ShoppingCart size={14} /> Add to Order
                      </>
                    )}
                  </button>
                  <a
                    href={`https://wa.me/254712345678?text=Hi!%20I%20want%20to%20order%20${encodeURIComponent(
                      product.name
                    )}%20(${quantities[product.id] || product.minQty}%20${product.unit})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 border border-emerald-200 text-emerald-700 rounded-lg text-sm hover:bg-emerald-50 transition"
                  >
                    <span className="text-xs">WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <Search size={48} className="text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-400 mb-2">
              No products found
            </h3>
            <p className="text-gray-400">
              Try adjusting your search or filters
            </p>
            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("all");
                setActiveSubcategory(null);
              }}
              className="mt-4 text-emerald-600 font-medium hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-56">
              <img
                src={selected.image}
                alt={selected.name}
                className="w-full h-full object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow"
              >
                <X size={16} />
              </button>
            </div>
            <div className="p-6">
              <span className="text-xs text-emerald-600 font-medium uppercase">
                {selected.subcategory}
              </span>
              <h2 className="text-2xl font-bold text-gray-900 mt-1 mb-2">
                {selected.name}
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                {selected.description}
              </p>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-2xl font-bold text-emerald-700">
                  {formatPrice(selected.priceKES)}
                </span>
                <span className="text-gray-400">/{selected.unit}</span>
              </div>

              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">
                  Available Options:
                </p>
                <div className="flex flex-wrap gap-2">
                  {selected.customization.map((c) => (
                    <span
                      key={c}
                      className="text-xs bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <span className="flex items-center gap-1">
                  <Clock size={14} /> {selected.turnaround}
                </span>
                <span>Min: {selected.minQty} {selected.unit}</span>
              </div>

              {/* Qty + CTA */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      handleQtyChange(selected.id, -1, selected.minQty)
                    }
                    className="w-10 h-10 border border-gray-200 rounded-lg flex items-center justify-center"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-12 text-center font-semibold">
                    {quantities[selected.id] || selected.minQty}
                  </span>
                  <button
                    onClick={() =>
                      handleQtyChange(selected.id, 1, selected.minQty)
                    }
                    className="w-10 h-10 border border-gray-200 rounded-lg flex items-center justify-center"
                  >
                    <Plus size={14} />
                  </button>
                </div>
                <button
                  onClick={() => handleAddToCart(selected.id)}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-medium transition"
                >
                  {addedIds[selected.id] ? "Added!" : "Add to Order"}
                </button>
              </div>

              <a
                href={`https://wa.me/254712345678?text=Hi!%20I%20want%20to%20order%20${encodeURIComponent(
                  selected.name
                )}%20(${quantities[selected.id] || selected.minQty}%20${selected.unit})`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-center text-emerald-600 text-sm hover:underline"
              >
                Or order via WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
