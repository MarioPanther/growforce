import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

const whatsappHref = `https://wa.me/${siteConfig.whatsappPhone}?text=${encodeURIComponent(
  siteConfig.whatsappMessage,
)}`;

export function FloatingActions() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-[9999] px-4 sm:bottom-6 sm:px-6">
      <div className="flex items-end justify-between">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Grow Force on WhatsApp"
          className="floating-action-glow pointer-events-auto group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-emerald-500/40 transition duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-emerald-300 sm:h-16 sm:w-16"
        >
          <span className="floating-action-ripple absolute inset-0 rounded-full bg-[#25D366]" />
          <span className="absolute inset-0 rounded-full bg-gradient-to-br from-white/25 via-transparent to-black/10" />
          <svg
            aria-hidden="true"
            viewBox="0 0 32 32"
            className="relative h-7 w-7 transition-transform duration-300 group-hover:-rotate-6 sm:h-8 sm:w-8"
            fill="currentColor"
          >
            <path d="M16.03 4C9.4 4 4 9.27 4 15.76c0 2.22.64 4.36 1.84 6.21L4.6 28l6.21-1.58A12.2 12.2 0 0 0 16.03 27C22.66 27 28 21.73 28 15.24 28 8.75 22.66 4 16.03 4Zm0 20.97c-1.72 0-3.4-.46-4.86-1.32l-.35-.2-3.68.94.98-3.5-.23-.36a9.38 9.38 0 0 1-1.52-5.12c0-5.17 4.34-9.38 9.67-9.38 5.32 0 9.64 4.2 9.64 9.38 0 5.17-4.32 9.56-9.65 9.56Zm5.3-7.02c-.29-.14-1.72-.83-1.99-.92-.27-.1-.47-.14-.66.14-.2.28-.76.92-.93 1.11-.17.19-.34.21-.63.07-.29-.14-1.23-.44-2.34-1.41-.86-.75-1.45-1.68-1.62-1.96-.17-.28-.02-.43.13-.57.13-.13.29-.33.44-.5.15-.16.2-.28.29-.47.1-.19.05-.35-.02-.5-.07-.14-.66-1.55-.91-2.13-.24-.56-.49-.49-.66-.5h-.57c-.2 0-.51.07-.78.35-.27.28-1.02.97-1.02 2.36s1.04 2.74 1.19 2.93c.15.19 2.05 3.05 4.97 4.28.69.29 1.23.46 1.65.59.69.21 1.32.18 1.82.11.56-.08 1.72-.68 1.96-1.34.24-.66.24-1.22.17-1.34-.07-.12-.27-.19-.56-.33Z" />
          </svg>
        </a>

        <a
          href={siteConfig.enquiryHref}
          aria-label="Enquire with Grow Force"
          className="floating-action-glow pointer-events-auto group relative inline-flex h-14 items-center justify-center gap-2 rounded-full bg-primary px-5 font-semibold text-primary-foreground shadow-2xl shadow-primary/35 transition duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent/40 sm:h-16 sm:px-6"
        >
          <span className="floating-action-ripple absolute inset-0 rounded-full bg-primary" />
          <span className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 via-transparent to-accent/20" />
          <MessageCircle className="relative h-5 w-5 transition-transform duration-300 group-hover:rotate-6 sm:h-6 sm:w-6" />
          <span className="relative text-sm sm:text-base">Enquire</span>
        </a>
      </div>
    </div>
  );
}
