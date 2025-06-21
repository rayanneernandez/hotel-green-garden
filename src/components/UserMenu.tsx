import React, { useState } from 'react';
import { User, LogOut, Settings, Calendar } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  if (!user) return null;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-green-50 text-green-700 px-3 py-2 rounded-lg hover:bg-green-100 transition-colors duration-200"
      >
        <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center">
          <User size={16} />
        </div>
        <span className="font-medium hidden md:block">{user.name.split(' ')[0]}</span>
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-20">
            <div className="p-3 border-b border-gray-200">
              <p className="font-medium text-gray-800">{user.name}</p>
              <p className="text-sm text-gray-600">{user.email}</p>
            </div>
            <div className="py-1">
              <button className="flex items-center space-x-2 w-full px-3 py-2 text-left text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                <Calendar size={16} />
                <span>Minhas Reservas</span>
              </button>
              <button className="flex items-center space-x-2 w-full px-3 py-2 text-left text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                <Settings size={16} />
                <span>Configurações</span>
              </button>
              <button 
                onClick={handleLogout}
                className="flex items-center space-x-2 w-full px-3 py-2 text-left text-red-600 hover:bg-red-50 transition-colors duration-200"
              >
                <LogOut size={16} />
                <span>Sair</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}