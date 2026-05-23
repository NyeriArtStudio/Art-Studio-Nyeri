import { Phone } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/254712345678?text=Hi%20Nyeri%20Art%20Studio!%20I%20would%20like%20to%20place%20an%20order."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 animate-bounce-slow"
      aria-label="Chat on WhatsApp"
    >
      <Phone size={24} />
    </a>
  );
}
