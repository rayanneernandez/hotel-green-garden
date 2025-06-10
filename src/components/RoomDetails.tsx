import React, { useState } from 'react';
import { ArrowLeft, Users, Maximize, Wifi, Car, Coffee, Dumbbell, ArrowRight, ArrowLeft as ArrowLeftIcon, Check } from 'lucide-react';
import { Room } from '../types';

interface RoomDetailsProps {
  room: Room;
  onBack: () => void;
  onBook: (roomId: string) => void;
}

export default function RoomDetails({ room, onBack, onBook }: RoomDetailsProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  const amenityIcons: { [key: string]: React.ReactNode } = {
    'Wi-Fi Gratuito': <Wifi size={20} />,
    'Ar Condicionado': <Coffee size={20} />,
    'Estacionamento': <Car size={20} />,
    'Academia': <Dumbbell size={20} />
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-green-600 hover:text-green-700 mb-6 transition-colors duration-200"
        >
          <ArrowLeft size={20} />
          <span>Voltar aos Quartos</span>
        </button>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Image Gallery */}
          <div className="relative h-96 md:h-[500px]">
            <img
              src={room.images[currentImageIndex]}
              alt={`${room.name} - Imagem ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
            />
            
            {room.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-200"
                >
                  <ArrowLeftIcon size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-200"
                >
                  <ArrowRight size={20} />
                </button>
                
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {room.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
            
            <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg">
              <span className="font-bold text-xl">
                R$ {room.price}
                <span className="text-sm opacity-90">/noite</span>
              </span>
            </div>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Room Info */}
              <div>
                <div className="mb-6">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block">
                    {room.type.charAt(0).toUpperCase() + room.type.slice(1)}
                  </span>
                  <h1 className="text-3xl font-bold text-gray-800 mb-3">{room.name}</h1>
                  <p className="text-gray-600 text-lg leading-relaxed">{room.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Users className="text-green-600" size={20} />
                      <span className="font-medium text-gray-800">Capacidade</span>
                    </div>
                    <p className="text-gray-600">Até {room.maxGuests} hóspedes</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Maximize className="text-green-600" size={20} />
                      <span className="font-medium text-gray-800">Área</span>
                    </div>
                    <p className="text-gray-600">{room.size}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Características</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {room.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Check className="text-green-500" size={16} />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Amenities & Booking */}
              <div>
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Comodidades</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {room.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        {amenityIcons[amenity] || <Check className="text-green-500\" size={16} />}
                        <span className="text-gray-700 text-sm">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Booking Card */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Reserve este Quarto</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-green-200">
                      <span className="text-gray-700">Preço por noite</span>
                      <span className="font-bold text-lg">R$ {room.price}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-green-200">
                      <span className="text-gray-700">Capacidade máxima</span>
                      <span className="font-medium">{room.maxGuests} hóspedes</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-700">Check-in</span>
                      <span className="font-medium">14:00</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-700">Check-out</span>
                      <span className="font-medium">12:00</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => onBook(room.id)}
                    className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200 mt-6 shadow-md hover:shadow-lg"
                  >
                    Reservar Agora
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}