import React from 'react';
import { Users, Maximize, Star, ArrowRight } from 'lucide-react';
import { Room } from '../types';

interface RoomCardProps {
  room: Room;
  onSelect: (roomId: string) => void;
  onBook: (roomId: string) => void;
}

export default function RoomCard({ room, onSelect, onBook }: RoomCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img
          src={room.images[0]}
          alt={room.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
          <span className="text-green-600 font-bold text-lg">
            R$ {room.price}
            <span className="text-sm text-gray-600">/noite</span>
          </span>
        </div>
        <div className="absolute top-4 left-4 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">
          {room.type.charAt(0).toUpperCase() + room.type.slice(1)}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-800">{room.name}</h3>
          <div className="flex items-center text-green-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{room.description}</p>
        
        <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Users size={16} />
            <span>Até {room.maxGuests} hóspedes</span>
          </div>
          <div className="flex items-center space-x-1">
            <Maximize size={16} />
            <span>{room.size}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {room.amenities.slice(0, 3).map((amenity, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
            >
              {amenity}
            </span>
          ))}
          {room.amenities.length > 3 && (
            <span className="text-green-600 text-xs font-medium">
              +{room.amenities.length - 3} mais
            </span>
          )}
        </div>
        
        <div className="flex space-x-3">
          <button
            onClick={() => onSelect(room.id)}
            className="flex-1 border border-green-600 text-green-600 py-2 px-4 rounded-lg hover:bg-green-50 transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <span>Ver Detalhes</span>
            <ArrowRight size={16} />
          </button>
          <button
            onClick={() => onBook(room.id)}
            className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium"
          >
            Reservar
          </button>
        </div>
      </div>
    </div>
  );
}