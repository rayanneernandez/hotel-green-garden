import React from 'react';
import { CheckCircle, Calendar, User, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Booking } from '../types';
import { rooms } from '../data/rooms';

interface BookingConfirmationProps {
  booking: Booking;
  onNewBooking: () => void;
}

export default function BookingConfirmation({ booking, onNewBooking }: BookingConfirmationProps) {
  const room = rooms.find(r => r.id === booking.roomId);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-xl p-8 text-center">
          <div className="mb-6">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="text-green-500" size={40} />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Reserva Confirmada!</h1>
            <p className="text-gray-600">Sua reserva foi processada com sucesso</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 mb-6 text-left">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Detalhes da Reserva</h2>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <User className="text-green-600" size={16} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Hóspede</p>
                  <p className="font-medium">{booking.guestName}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Mail className="text-blue-600" size={16} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-medium">{booking.email}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Phone className="text-green-600" size={16} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Telefone</p>
                  <p className="font-medium">{booking.phone}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <MapPin className="text-purple-600" size={16} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Quarto</p>
                  <p className="font-medium">{room?.name}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-indigo-100 p-2 rounded-lg">
                  <Calendar className="text-indigo-600" size={16} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Período</p>
                  <p className="font-medium">
                    {new Date(booking.checkIn).toLocaleDateString('pt-BR')} até {new Date(booking.checkOut).toLocaleDateString('pt-BR')}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-red-100 p-2 rounded-lg">
                  <Clock className="text-red-600" size={16} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Horários</p>
                  <p className="font-medium">Check-in: 14:00 • Check-out: 12:00</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 mt-6 pt-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-gray-800">Total Pago:</span>
                <span className="text-2xl font-bold text-green-600">R$ {booking.totalPrice.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <h3 className="font-bold text-gray-800 mb-2">Código da Reserva</h3>
            <p className="text-2xl font-mono font-bold text-green-600">#{booking.id}</p>
            <p className="text-sm text-gray-600 mt-1">Guarde este código para futuras consultas</p>
          </div>

          <div className="space-y-3">
            <p className="text-gray-600">
              Um email de confirmação foi enviado para <strong>{booking.email}</strong>
            </p>
            
            <div className="flex space-x-4 justify-center">
              <button
                onClick={onNewBooking}
                className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200"
              >
                Nova Reserva
              </button>
              <button
                onClick={() => window.print()}
                className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200"
              >
                Imprimir
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}