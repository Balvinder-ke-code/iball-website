"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [showDesktopNav, setShowDesktopNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down
        setShowDesktopNav(false);
      } else {
        // Scrolling up
        setShowDesktopNav(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`hidden md:block fixed top-2 sm:top-4 left-1/2 transform -translate-x-1/2 z-40 glass-morphism rounded-full px-6 w-auto transition-all duration-500 ${
          showDesktopNav
            ? "translate-y-0 opacity-100"
            : "-translate-y-32 opacity-0"
        }`}
        data-testid="navigation"
      >
        <div className="flex justify-center items-center h-14">
          <div className="flex space-x-8">
            <a
              href="#home"
              className="text-muted-foreground hover:text-accent transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-muted-foreground hover:text-accent transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#portfolio"
              className="text-muted-foreground hover:text-accent transition-colors duration-300"
            >
              My Work
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-accent transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-md bg-black/60 backdrop-blur-md text-white"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-black/80 backdrop-blur-md flex flex-col items-center justify-center space-y-8 z-40 transition-all duration-500">
          <a
            href="#home"
            className="text-white text-2xl hover:text-accent transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white text-2xl hover:text-accent transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            About
          </a>
          <a
            href="#portfolio"
            className="text-white text-2xl hover:text-accent transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            My Work
          </a>
          <a
            href="#contact"
            className="text-white text-2xl hover:text-accent transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </>
  );
}
