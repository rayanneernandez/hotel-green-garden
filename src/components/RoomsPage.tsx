import React from 'react';
import RoomCard from './RoomCard';
import { rooms } from '../data/rooms';

interface RoomsPageProps {
  onRoomSelect: (roomId: string) => void;
  onRoomBook: (roomId: string) => void;
}

export default function RoomsPage({ onRoomSelect, onRoomBook }: RoomsPageProps) {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Nossos Quartos</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubra nossas acomodações cuidadosamente projetadas para oferecer o máximo em conforto, 
            elegância e comodidade. Cada quarto é um refúgio de tranquilidade com vista deslumbrante.
          </p>
        </div>

        {/* Room Categories */}
        <div className="mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Suíte Presidencial</h3>
              <p className="text-green-600 font-medium">A partir de R$ 1.200</p>
              <p className="text-sm text-gray-600 mt-2">Luxo máximo com vista panorâmica</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Suíte Executiva</h3>
              <p className="text-green-600 font-medium">A partir de R$ 650</p>
              <p className="text-sm text-gray-600 mt-2">Perfeita para viajantes de negócios</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Quarto Deluxe</h3>
              <p className="text-green-600 font-medium">A partir de R$ 380</p>
              <p className="text-sm text-gray-600 mt-2">Elegância e conforto moderno</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Quarto Standard</h3>
              <p className="text-green-600 font-medium">A partir de R$ 220</p>
              <p className="text-sm text-gray-600 mt-2">Excelente custo-benefício</p>
            </div>
          </div>
        </div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              onSelect={onRoomSelect}
              onBook={onRoomBook}
            />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">24h</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Check-in Flexível</h3>
              <p className="text-gray-600">Check-in 24 horas com recepção sempre disponível</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">★</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Serviço Premium</h3>
              <p className="text-gray-600">Atendimento personalizado e room service 24h</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">✓</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Cancelamento Grátis</h3>
              <p className="text-gray-600">Cancelamento gratuito até 24h antes da chegada</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}