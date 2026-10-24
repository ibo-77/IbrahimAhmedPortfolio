import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "الرئيسية", href: "#hero" },
  { label: "من أنا", href: "#about" },
  { label: "الخدمات", href: "#services" },
  { label: "الإنجازات", href: "#achievements" },
  { label: "الشهادات", href: "#certificates" },
  { label: "المهارات", href: "#skills" },
  { label: "الدورات", href: "#courses" },
  { label: "تواصل معي", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_2px_20px_rgba(74,46,27,0.10)] border-b border-brand-border-light"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNav("#hero")}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-brand-border shadow-btn group-hover:scale-110 transition-transform duration-200">
              <img
                src="https://cdn-ai.onspace.ai/onspace/project/uploads/9tWKwvmfXvfuNcDUtkoSQJ/صورة_شخصية_.jpeg"
                alt="إبراهيم أحمد"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <span className="font-cairo font-800 text-lg text-brand-text hidden sm:block">
              إبراهيم أحمد
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="px-4 py-2 rounded-lg text-sm font-medium text-brand-text-light hover:text-brand-primary hover:bg-brand-border-light transition-all duration-200 font-cairo"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/966537010835"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-primary-gradient text-white text-sm font-semibold shadow-btn hover:shadow-btn-hover hover:scale-105 transition-all duration-200 font-cairo"
            >
              تواصل الآن
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-brand-warm border border-brand-border text-brand-primary hover:bg-brand-border-light transition-colors duration-200"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } bg-white/95 backdrop-blur-md border-t border-brand-border-light`}
      >
        <nav className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="w-full text-right px-4 py-3 rounded-xl text-brand-text-light hover:text-brand-primary hover:bg-brand-warm font-cairo font-medium transition-all duration-200"
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://wa.me/966537010835"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary-gradient text-white font-semibold shadow-btn font-cairo"
          >
            تواصل عبر واتساب
          </a>
        </nav>
      </div>
    </header>
  );
}
