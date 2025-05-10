import React, { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navLinks = [
  { title: "Главная", href: "/" },
  { title: "Каталог", href: "/catalog" },
  { title: "Мастер-классы", href: "/workshops" },
  { title: "О нас", href: "/about" },
  { title: "Контакты", href: "/contacts" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="z-10">
            <h1
              className={`text-2xl md:text-3xl font-playfair font-semibold ${
                isScrolled ? "text-olive-dark" : "text-white"
              }`}
            >
              Флора Премиум
              <span
                className={`${
                  isScrolled ? "text-rose-DEFAULT" : "text-rose-light"
                } text-sm align-top`}
              >
                студия
              </span>
            </h1>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.href}
                className={`font-medium ${
                  isScrolled ? "text-olive-DEFAULT" : "text-white"
                } fancy-link`}
              >
                {link.title}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className={isScrolled ? "text-olive-DEFAULT" : "text-white"}
            >
              <Search size={20} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={`${
                isScrolled ? "text-olive-DEFAULT" : "text-white"
              } relative`}
            >
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs bg-rose-dark text-white rounded-full">
                0
              </span>
            </Button>
            <Button
              className={
                isScrolled
                  ? "bg-olive-DEFAULT hover:bg-olive-dark text-white"
                  : "bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30"
              }
            >
              Заказать
            </Button>
          </div>

          <div className="flex items-center space-x-4 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className={isScrolled ? "text-forest-green" : "text-white"}
            >
              <ShoppingBag size={20} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={isScrolled ? "text-forest-green" : "text-white"}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 animate-fadeIn">
          <nav className="container mx-auto px-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.href}
                className="font-medium text-forest-green py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <Button className="bg-forest-green hover:bg-forest-green/90 text-white mt-4">
              Заказать
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
