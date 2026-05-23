import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Upload,
  X,
  FileImage,
  FileText,
  CheckCircle,
  PenTool,
  Layers,
  Shirt,
  Signpost,
  Gift,
  Printer,
  Frame,
  Send,
  AlertCircle,
} from "lucide-react";

const acceptedFormats = [
  { ext: ".jpg, .jpeg", desc: "JPEG images" },
  { ext: ".png", desc: "PNG images with transparency" },
  { ext: ".pdf", desc: "PDF documents" },
  { ext: ".ai", desc: "Adobe Illustrator files" },
  { ext: ".cdr", desc: "CorelDRAW files" },
  { ext: ".psd", desc: "Photoshop files" },
  { ext: ".eps", desc: "Encapsulated PostScript" },
  { ext: ".svg", desc: "Scalable Vector Graphics" },
];

const serviceOptions = [
  {
    id: "banners",
    label: "Banners & Signage",
    icon: Signpost,
    options: ["Flex Banner", "Roll-Up Banner", "Backdrop", "Vehicle Branding", "Wall Mural", "Signpost", "Other"],
  },
  {
    id: "apparel",
    label: "Apparel & Wearables",
    icon: Shirt,
    options: ["T-Shirts", "Hoodies", "Caps", "Uniforms", "Reflective Vests", "Jerseys", "Other"],
  },
  {
    id: "corporate",
    label: "Corporate & Office",
    icon: Printer,
    options: ["Business Cards", "Flyers", "Brochures", "Booklets", "Letterheads", "Certificates", "Other"],
  },
  {
    id: "gifts",
    label: "Gifts & Merch",
    icon: Gift,
    options: ["Mugs", "Tote Bags", "Water Bottles", "Keyholders", "Notebooks", "Photo Gifts", "Other"],
  },
  {
    id: "documents",
    label: "Documents & Prints",
    icon: Layers,
    options: ["Photocopying", "Laminating", "Binding", "Posters", "Canvas Prints", "Stickers", "Other"],
  },
  {
    id: "custom",
    label: "Custom/Fabrication",
    icon: Frame,
    options: ["Metal Fabrication", "Graphic Design", "Event Package", "Installation", "Other"],
  },
];

const commonSpecs: Record<string, string[]> = {
  "Flex Banner": ["Single-sided", "Double-sided", "With wind slits", "With eyelets", "Hemmed edges"],
  "Roll-Up Banner": ["85x200cm", "100x200cm", "Double-sided base"],
  "Backdrop": ["8x8 ft spider frame", "10x10 ft telescopic", "Fabric finish", "PVC finish"],
  "Vehicle Branding": ["Partial wrap", "Full wrap", "Window perf", "Roof only"],
  "T-Shirts": ["Cotton 180gsm", "Poly-cotton", "Full sublimation", "Chest print only", "Front & back"],
  "Hoodies": ["Cotton blend", "Front pocket print", "Back large print", "Sleeve print"],
  "Caps": ["Baseball cap", "Trucker cap", "Snapback", "Front embroidery", "Heat transfer"],
  "Business Cards": ["300gsm matte", "350gsm gloss", "Rounded corners", "Spot UV", "Gold foil"],
  "Mugs": ["11oz white", "15oz white", "Color-changing", "Full wrap print", "Box packaging"],
  "Photo Gifts": ["Photo mug", "Photo pillow", "Photo puzzle", "Photo calendar"],
};

export default function CustomOrderPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedSpecs, setSelectedSpecs] = useState<string[]>([]);
  const [notes, setNotes] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [quantity, setQuantity] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...newFiles].slice(0, 5));
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const toggleSpec = (spec: string) => {
    setSelectedSpecs((prev) =>
      prev.includes(spec) ? prev.filter((s) => s !== spec) : [...prev, spec]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message
    const fileNames = files.map((f) => f.name).join(", ");
    const specs = selectedSpecs.join(", ");
    const msg = `*Custom Order Request - Nyeri Art Studio*%0A%0A` +
      `*Name:* ${name}%0A` +
      `*Phone:* ${phone}%0A` +
      `*Email:* ${email || "N/A"}%0A` +
      `*Service:* ${selectedOption || "Not specified"}%0A` +
      `*Specs:* ${specs || "N/A"}%0A` +
      `*Quantity:* ${quantity || "N/A"}%0A` +
      `*Files:* ${fileNames || "No files uploaded"}%0A` +
      `*Notes:* ${notes || "N/A"}`;

    window.open(`https://wa.me/254712345678?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  const currentSpecs = commonSpecs[selectedOption] || [];

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-lg">
          <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Order Request Sent!
          </h2>
          <p className="text-gray-600 mb-6">
            We&apos;ve opened WhatsApp with your order details. Our team will
            review your files and get back to you within 24 hours.
          </p>
          <div className="space-y-3">
            <Link
              to="/catalog"
              className="block w-full bg-emerald-600 text-white py-3 rounded-lg font-medium hover:bg-emerald-700 transition"
            >
              Continue Shopping
            </Link>
            <button
              onClick={() => setSubmitted(false)}
              className="block w-full border border-gray-200 text-gray-600 py-3 rounded-lg font-medium hover:bg-gray-50 transition"
            >
              Submit Another Order
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <title>Custom Order | Nyeri Art Studio — Upload Your Design</title>
      <meta
        name="description"
        content="Upload your design and get a custom quote. We accept JPG, PNG, PDF, AI, CDR, PSD, EPS, SVG. Banners, T-shirts, signage, mugs, business cards & more."
      />

      {/* Header */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 text-emerald-400 text-sm mb-3">
            <PenTool size={16} />
            <span className="uppercase tracking-wide font-medium">
              Custom Order
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Have a Design? Let&apos;s Print It!
          </h1>
          <p className="text-gray-300">
            Upload your artwork, select your product, choose options, and
            we&apos;ll handle the rest. Free design review included.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Step 1: Service Selection */}
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-7 h-7 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                1
              </span>
              <h2 className="font-bold text-lg">What do you need printed?</h2>
            </div>

            {/* Service category grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-5">
              {serviceOptions.map((svc) => (
                <button
                  key={svc.id}
                  type="button"
                  onClick={() => {
                    setSelectedService(svc.id);
                    setSelectedOption("");
                    setSelectedSpecs([]);
                  }}
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition ${
                    selectedService === svc.id
                      ? "border-emerald-500 bg-emerald-50"
                      : "border-gray-100 hover:border-gray-200 bg-gray-50"
                  }`}
                >
                  <svc.icon
                    size={24}
                    className={
                      selectedService === svc.id
                        ? "text-emerald-600"
                        : "text-gray-400"
                    }
                  />
                  <span
                    className={`text-xs font-medium text-center ${
                      selectedService === svc.id
                        ? "text-emerald-700"
                        : "text-gray-600"
                    }`}
                  >
                    {svc.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Specific option */}
            {selectedService && (
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-700 mb-2">
                  Select specific product:
                </p>
                <div className="flex flex-wrap gap-2">
                  {serviceOptions
                    .find((s) => s.id === selectedService)
                    ?.options.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => {
                          setSelectedOption(opt);
                          setSelectedSpecs([]);
                        }}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition ${
                          selectedOption === opt
                            ? "bg-emerald-600 text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                </div>
              </div>
            )}

            {/* Specs */}
            {selectedOption && currentSpecs.length > 0 && (
              <div className="mt-4 p-4 bg-emerald-50 rounded-xl">
                <p className="text-sm font-medium text-emerald-800 mb-2">
                  Available options for {selectedOption}:
                </p>
                <div className="flex flex-wrap gap-2">
                  {currentSpecs.map((spec) => (
                    <button
                      key={spec}
                      type="button"
                      onClick={() => toggleSpec(spec)}
                      className={`px-3 py-1 rounded-full text-xs transition ${
                        selectedSpecs.includes(spec)
                          ? "bg-emerald-600 text-white"
                          : "bg-white text-emerald-700 border border-emerald-200"
                      }`}
                    >
                      {selectedSpecs.includes(spec) && <CheckCircle size={10} className="inline mr-1" />}
                      {spec}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Step 2: File Upload */}
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-7 h-7 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                2
              </span>
              <h2 className="font-bold text-lg">Upload Your Design</h2>
              <span className="text-xs text-gray-400">(Optional — max 5 files)</span>
            </div>

            {/* Upload area */}
            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-gray-300 hover:border-emerald-400 rounded-xl p-8 text-center cursor-pointer transition bg-gray-50 hover:bg-emerald-50/30"
            >
              <Upload size={40} className="text-gray-400 mx-auto mb-3" />
              <p className="text-gray-600 font-medium mb-1">
                Click to upload or drag files here
              </p>
              <p className="text-gray-400 text-xs">
                Max 10MB per file, up to 5 files
              </p>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept=".jpg,.jpeg,.png,.pdf,.ai,.cdr,.psd,.eps,.svg"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>

            {/* Accepted formats */}
            <div className="mt-4">
              <p className="text-xs text-gray-500 mb-2 font-medium">
                Accepted file formats:
              </p>
              <div className="flex flex-wrap gap-2">
                {acceptedFormats.map((f) => (
                  <span
                    key={f.ext}
                    className="text-[10px] bg-gray-100 text-gray-500 px-2 py-1 rounded flex items-center gap-1"
                  >
                    {f.ext.startsWith(".") ? (
                      <FileImage size={10} />
                    ) : (
                      <FileText size={10} />
                    )}
                    {f.ext} — {f.desc}
                  </span>
                ))}
              </div>
            </div>

            {/* File list */}
            {files.length > 0 && (
              <div className="mt-4 space-y-2">
                {files.map((file, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between bg-emerald-50 p-3 rounded-lg"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <FileImage size={16} className="text-emerald-600 shrink-0" />
                      <span className="text-sm text-gray-700 truncate">
                        {file.name}
                      </span>
                      <span className="text-xs text-gray-400 shrink-0">
                        ({(file.size / 1024 / 1024).toFixed(1)} MB)
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFile(idx)}
                      className="text-red-500 hover:text-red-700 p-1"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Step 3: Order Details */}
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-7 h-7 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                3
              </span>
              <h2 className="font-bold text-lg">Order Details</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Kamau"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="0712 345 678"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Quantity
                </label>
                <input
                  type="text"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="e.g., 50 T-shirts, 2 banners"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Additional Notes
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={4}
                placeholder="Describe colors, sizes, deadlines, special requirements, delivery location..."
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm resize-none"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-lg mb-5">
              <AlertCircle size={18} className="text-amber-600 mt-0.5 shrink-0" />
              <p className="text-sm text-amber-700">
                Your order request will be sent via WhatsApp. Our team will
                review your files, confirm specifications, and send you a
                detailed quotation within 24 hours.
              </p>
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-bold text-lg transition flex items-center justify-center gap-2"
            >
              <Send size={20} /> Send Order Request via WhatsApp
            </button>
            <p className="text-center text-gray-400 text-xs mt-3">
              Prefer to talk? Call us directly:{" "}
              <a href="tel:+254712345678" className="text-emerald-600">
                0712 345 678
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
