import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/app", label: "App" },
    { to: "/about", label: "About" },
    { to: "/support", label: "Support" },
  ];

  const isHome = location.pathname === "/";
  const solidBg = isScrolled
    ? "bg-white border-b border-[#e4e4e0]"
    : isHome
    ? "bg-transparent border-b border-transparent"
    : "bg-white border-b border-[#e4e4e0]";
  const textClass = isScrolled || !isHome ? "text-[#0a0a0a]" : "text-white";
  const logoClass = isScrolled || !isHome ? "text-[#0a0a0a]" : "text-white";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${solidBg}`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              to="/"
              className={`font-[Archivo] font-black text-[15px] uppercase tracking-[0.06em] transition-colors duration-300 ${logoClass}`}
            >
              aqua eco
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-[11px] font-semibold uppercase tracking-[0.08em] transition-colors duration-200 ${textClass} ${
                    location.pathname === link.to ? "opacity-40" : "opacity-100"
                  } hover:opacity-60`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:block">
              <Link
                to="/contact"
                className={`inline-block px-[22px] py-[10px] text-[11px] font-semibold uppercase tracking-[0.08em] border transition-colors duration-200 ${
                  isScrolled || !isHome
                    ? "border-[#0a0a0a] text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white"
                    : "border-white text-white hover:bg-white hover:text-[#0a0a0a]"
                }`}
                style={{ borderRadius: "2px" }}
              >
                Get in touch
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-1 transition-colors duration-200 ${textClass}`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white md:hidden"
            style={{ top: "64px" }}
          >
            <nav className="flex flex-col px-6 pt-8 pb-6 gap-6 border-t border-[#e4e4e0]">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-[#0a0a0a] text-2xl font-black uppercase tracking-tight font-[Archivo]"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 pt-6 border-t border-[#e4e4e0]">
                <Link
                  to="/contact"
                  className="inline-block w-full text-center px-6 py-4 bg-[#0a0a0a] text-white text-[12px] font-semibold uppercase tracking-[0.08em]"
                  style={{ borderRadius: "2px" }}
                >
                  Get in touch
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
