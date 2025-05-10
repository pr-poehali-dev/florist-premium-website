
import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const navLinks = [
  { title: 'Главная', href: '/' },
  { title: 'Каталог', href: '/catalog' },
  { title: 'Мастер-классы', href: '/workshops' },
  { title: 'О нас', href: '/about' },
  { title: 'Контакты', href: '/contacts' },
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="z-10">
            <h1 className="text-2xl md:text-3xl font-playfair font-semibold text-forest-green">
              Флора
              <span className="text-gold text-sm align-top">премиум</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.title} 
                to={link.href} 
                className="font-medium text-forest-green fancy-link"
              >
                {link.title}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-forest-green">
              <Search size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="text-forest-green relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs bg-burgundy text-white rounded-full">0</span>
            </Button>
            <Button className="bg-forest-green hover:bg-forest-green/90 text-white">
              Заказать
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-4 md:hidden">
            <Button variant="ghost" size="icon" className="text-forest-green">
              <ShoppingBag size={20} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-forest-green"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
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
