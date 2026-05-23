import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Facebook,
  Instagram,
  Twitter,
  CheckCircle,
  Navigation,
} from "lucide-react";
import { counties } from "@/data/counties";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*New Message from Website*%0A%0AName: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0A%0AMessage:%0A${form.message}`;
    window.open(`https://wa.me/254712345678?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <title>Contact Us | Nyeri Art Studio — Get In Touch</title>
      <meta
        name="description"
        content="Contact Nyeri Art Studio for printing, branding, and signage services. Visit us in Nyeri Town, call, WhatsApp, or email. Serving Mt. Kenya region & all of Kenya."
      />

      {/* Header */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Get In Touch</h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Ready to start your project? Visit our studio in Nyeri, send us a
            message, or chat with us on WhatsApp. We&apos;re here to help!
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-5">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Visit Our Studio</p>
                    <p className="text-gray-500 text-sm">
                      Nyeri Art Studio, Kimathi Way
                      <br />
                      Nyeri Town, Nyeri County, Kenya
                    </p>
                    <a
                      href="https://maps.app.goo.gl/Z9i8CTYYWY4obd499"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-emerald-600 text-sm mt-1 hover:underline"
                    >
                      <Navigation size={12} /> Get Directions on Google Maps
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Call or WhatsApp</p>
                    <a
                      href="tel:+254712345678"
                      className="text-gray-500 text-sm hover:text-emerald-600 transition block"
                    >
                      0712 345 678
                    </a>
                    <a
                      href="https://wa.me/254712345678"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-green-600 text-sm mt-1 font-medium"
                    >
                      <MessageCircle size={14} /> Chat on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email Us</p>
                    <a
                      href="mailto:info@nyeristudio.co.ke"
                      className="text-gray-500 text-sm hover:text-emerald-600 transition"
                    >
                      info@nyeristudio.co.ke
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Business Hours</p>
                    <p className="text-gray-500 text-sm">
                      Monday – Saturday: 8:00 AM – 6:00 PM
                    </p>
                    <p className="text-gray-400 text-xs">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-xl flex items-center justify-center text-white transition"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 hover:opacity-90 rounded-xl flex items-center justify-center text-white transition"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-900 hover:bg-gray-800 rounded-xl flex items-center justify-center text-white transition"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="https://wa.me/254712345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-green-500 hover:bg-green-600 rounded-xl flex items-center justify-center text-white transition"
                >
                  <MessageCircle size={20} />
                </a>
              </div>
              <p className="text-gray-500 text-xs mt-3">
                Follow us for daily product showcases, deals, and behind-the-scenes content!
              </p>
            </div>

            {/* Delivery areas */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-3">
                We Deliver To:
              </h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-gray-600">
                {counties.map((c) => (
                  <span key={c.slug} className="flex items-center gap-1">
                    <MapPin size={10} className="text-emerald-400" />
                    {c.name}
                  </span>
                ))}
                <span className="flex items-center gap-1 font-medium text-emerald-600 col-span-2 mt-1">
                  + All 47 counties via courier
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form + Map */}
          <div className="space-y-6">
            {/* Form */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-5">
                Send Us a Message
              </h2>

              {submitted ? (
                <div className="text-center py-10">
                  <CheckCircle size={48} className="text-green-500 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-900 mb-1">Message Sent!</h3>
                  <p className="text-gray-500 text-sm">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", phone: "", message: "" });
                    }}
                    className="mt-4 text-emerald-600 text-sm hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Kamau"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        placeholder="0712 345 678"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      placeholder="Tell us about your project, quantity needed, deadline, delivery location..."
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-medium transition flex items-center justify-center gap-2"
                  >
                    <Send size={16} /> Send via WhatsApp
                  </button>
                </form>
              )}
            </div>

            {/* Google Map */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                  <MapPin size={16} className="text-emerald-600" />
                  Find Us on Google Maps
                </h3>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19891843766!2d36.8681!3d-0.4167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1828671a649519cb%3A0x9d5e039b55c2a6e4!2sNyeri%2C%20Kenya!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nyeri Art Studio Location"
                className="grayscale-[30%]"
              />
              <div className="p-4 bg-gray-50">
                <a
                  href="https://maps.app.goo.gl/Z9i8CTYYWY4obd499"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-600 font-medium text-sm hover:underline"
                >
                  <Navigation size={14} /> Open in Google Maps App
                </a>
                <p className="text-gray-400 text-xs mt-1">
                  (You can replace this with your exact shop location link)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
