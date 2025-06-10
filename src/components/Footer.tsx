import React from 'react';
import { Hotel, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Hotel Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-green-600 p-2 rounded-lg">
                <Hotel size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Hotel Green Garden</h3>
                <p className="text-sm text-gray-400">Luxo e conforto</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Oferecemos a melhor experiência em hospitalidade com conforto, elegância e atendimento excepcional.
            </p>
            <div className="flex space-x-4">
              <Facebook size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Quartos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Eventos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Galeria</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Nossos Serviços</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Room Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Lavanderia</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Translado</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Concierge</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Spa & Wellness</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-green-600" />
                <span className="text-gray-400">Av. Paulista, 1000<br/>São Paulo, SP - 01310-100</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-green-600" />
                <span className="text-gray-400">(11) 9999-8888</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-green-600" />
                <span className="text-gray-400">contato@hotelreal.com.br</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Hotel Real. Todos os direitos reservados. | 
            <a href="#" className="text-green-600 hover:text-green-500 ml-1">Política de Privacidade</a> | 
            <a href="#" className="text-green-600 hover:text-green-500 ml-1">Termos de Uso</a>
          </p>
        </div>
      </div>
    </footer>
  );
}