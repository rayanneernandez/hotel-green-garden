import React from 'react';
import { Hotel, Phone, Mail, MapPin } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'rooms', label: 'Quartos' },
    { id: 'services', label: 'Serviços' },
    { id: 'contact', label: 'Contato' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="bg-green-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>(11) 98919-1499</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>contato@hotelgreengarden.com.br</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin size={14} />
            <span>São Paulo, SP - Brasil</span>
          </div>
        </div>
      </div>
      
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <div className="bg-gradient-to-r from-green-600 to-green-500 p-2 rounded-lg">
              <Hotel className="text-white" size={28} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Hotel Green Garden</h1>
              <p className="text-sm text-gray-600">Luxo e conforto</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`font-medium transition-colors duration-200 px-3 py-2 rounded-lg ${
                  currentPage === item.id
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <button
            onClick={() => onNavigate('booking')}
            className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Reservar Agora
          </button>
        </div>
      </nav>
    </header>
  );
}