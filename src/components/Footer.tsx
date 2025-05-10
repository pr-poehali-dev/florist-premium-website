import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-forest-green text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-playfair mb-4">
              Оливия
              <span className="text-secondary text-sm align-top">букеты</span>
            </h2>
            <p className="text-white/80 mb-6">
              Создаем изысканные букеты и композиции для украшения вашей жизни и
              передачи ваших чувств на языке цветов.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-full border border-white/30 hover:border-secondary hover:text-secondary transition-colors duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-full border border-white/30 hover:border-secondary hover:text-secondary transition-colors duration-300"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-lg mb-4 text-gold">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-white/80 hover:text-gold transition-colors duration-200"
                >
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  to="/catalog"
                  className="text-white/80 hover:text-gold transition-colors duration-200"
                >
                  Каталог
                </Link>
              </li>
              <li>
                <Link
                  to="/workshops"
                  className="text-white/80 hover:text-gold transition-colors duration-200"
                >
                  Мастер-классы
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white/80 hover:text-gold transition-colors duration-200"
                >
                  О нас
                </Link>
              </li>
              <li>
                <Link
                  to="/contacts"
                  className="text-white/80 hover:text-gold transition-colors duration-200"
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-playfair text-lg mb-4 text-gold">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-0.5 text-gold shrink-0" />
                <span className="text-white/80">
                  ул. Цветочная, 123, Москва, Россия
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-gold shrink-0" />
                <a
                  href="tel:+71234567890"
                  className="text-white/80 hover:text-gold transition-colors duration-200"
                >
                  +7 (123) 456-78-90
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-gold shrink-0" />
                <a
                  href="mailto:info@flora-premium.ru"
                  className="text-white/80 hover:text-gold transition-colors duration-200"
                >
                  info@flora-premium.ru
                </a>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="font-playfair text-lg mb-4 text-gold">
              Часы работы
            </h3>
            <ul className="space-y-2">
              <li className="flex justify-between text-white/80">
                <span>Понедельник - Пятница:</span>
                <span>9:00 - 20:00</span>
              </li>
              <li className="flex justify-between text-white/80">
                <span>Суббота:</span>
                <span>10:00 - 18:00</span>
              </li>
              <li className="flex justify-between text-white/80">
                <span>Воскресенье:</span>
                <span>10:00 - 16:00</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-white/5 rounded border border-white/10">
              <p className="text-gold font-medium">Доставка 24/7</p>
              <p className="text-white/80 text-sm">
                Для предварительных заказов
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Флора Премиум. Все права защищены.
          </p>
          <div className="mt-4 md:mt-0 space-x-6 text-sm">
            <Link
              to="/privacy"
              className="text-white/60 hover:text-gold transition-colors duration-200"
            >
              Политика конфиденциальности
            </Link>
            <Link
              to="/terms"
              className="text-white/60 hover:text-gold transition-colors duration-200"
            >
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
