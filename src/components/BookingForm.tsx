import React, { useState } from 'react';
import { ArrowLeft, Calendar, Users, CreditCard, Shield, Lock } from 'lucide-react';
import { rooms } from '../data/rooms';
import { Booking, PaymentInfo } from '../types';

interface BookingFormProps {
  selectedRoomId?: string;
  onBack: () => void;
  onComplete: (booking: Booking) => void;
}

export default function BookingForm({ selectedRoomId, onBack, onComplete }: BookingFormProps) {
  const [step, setStep] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState(selectedRoomId || rooms[0].id);
  const [bookingData, setBookingData] = useState({
    guestName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: 1
  });
  const [paymentData, setPaymentData] = useState<PaymentInfo>({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
    billingAddress: {
      street: '',
      city: '',
      state: '',
      zipCode: '',
      country: 'Brasil'
    }
  });
  const [loading, setLoading] = useState(false);

  const room = rooms.find(r => r.id === selectedRoom);
  const totalNights = bookingData.checkIn && bookingData.checkOut ? 
    Math.ceil((new Date(bookingData.checkOut).getTime() - new Date(bookingData.checkIn).getTime()) / (1000 * 60 * 60 * 24)) : 0;
  const totalPrice = totalNights * (room?.price || 0);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (totalNights > 0) {
      setStep(2);
    }
  };

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const booking: Booking = {
      id: Date.now().toString(),
      roomId: selectedRoom,
      guestName: bookingData.guestName,
      email: bookingData.email,
      phone: bookingData.phone,
      checkIn: bookingData.checkIn,
      checkOut: bookingData.checkOut,
      guests: bookingData.guests,
      totalPrice,
      status: 'confirmed'
    };
    
    setLoading(false);
    onComplete(booking);
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  if (step === 1) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-green-600 hover:text-green-700 mb-6 transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            <span>Voltar</span>
          </button>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Fazer Reserva</h2>
              <p className="text-gray-600">Preencha os dados para continuar com sua reserva</p>
            </div>

            <form onSubmit={handleBookingSubmit} className="space-y-6">
              {/* Room Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Selecione o Quarto</label>
                <div className="grid md:grid-cols-2 gap-4">
                  {rooms.map((r) => (
                    <div
                      key={r.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                        selectedRoom === r.id
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedRoom(r.id)}
                    >
                      <div className="flex items-center space-x-3">
                        <input
                          type="radio"
                          name="room"
                          value={r.id}
                          checked={selectedRoom === r.id}
                          onChange={() => setSelectedRoom(r.id)}
                          className="text-green-600"
                        />
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-800">{r.name}</h3>
                          <p className="text-sm text-gray-600">R$ {r.price}/noite • Até {r.maxGuests} hóspedes</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Guest Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-800">Informações do Hóspede</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                    <input
                      type="text"
                      required
                      value={bookingData.guestName}
                      onChange={(e) => setBookingData({...bookingData, guestName: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      required
                      value={bookingData.email}
                      onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                    <input
                      type="tel"
                      required
                      value={bookingData.phone}
                      onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Stay Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-800">Detalhes da Estadia</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={bookingData.checkIn}
                      onChange={(e) => setBookingData({...bookingData, checkIn: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
                    <input
                      type="date"
                      required
                      min={bookingData.checkIn || new Date().toISOString().split('T')[0]}
                      value={bookingData.checkOut}
                      onChange={(e) => setBookingData({...bookingData, checkOut: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Número de Hóspedes</label>
                    <select
                      value={bookingData.guests}
                      onChange={(e) => setBookingData({...bookingData, guests: parseInt(e.target.value)})}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      {Array.from({length: room?.maxGuests || 4}, (_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1} hóspede{i > 0 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Summary */}
              {totalNights > 0 && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Resumo da Reserva</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Quarto:</span>
                      <span className="font-medium">{room?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Noites:</span>
                      <span className="font-medium">{totalNights}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Preço por noite:</span>
                      <span className="font-medium">R$ {room?.price}</span>
                    </div>
                    <div className="border-t border-green-300 pt-2 mt-2">
                      <div className="flex justify-between">
                        <span className="text-lg font-bold text-gray-800">Total:</span>
                        <span className="text-lg font-bold text-green-600">R$ {totalPrice.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={totalNights <= 0}
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continuar para Pagamento
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <button
          onClick={() => setStep(1)}
          className="flex items-center space-x-2 text-green-600 hover:text-green-700 mb-6 transition-colors duration-200"
        >
          <ArrowLeft size={20} />
          <span>Voltar aos Dados</span>
        </button>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Payment Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-green-600 p-2 rounded-lg">
                <CreditCard className="text-white" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Pagamento Seguro</h2>
                <p className="text-gray-600">Seus dados estão protegidos</p>
              </div>
            </div>

            <form onSubmit={handlePaymentSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nome no Cartão</label>
                <input
                  type="text"
                  required
                  value={paymentData.cardholderName}
                  onChange={(e) => setPaymentData({...paymentData, cardholderName: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Nome como está no cartão"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Número do Cartão</label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    maxLength={19}
                    value={paymentData.cardNumber}
                    onChange={(e) => setPaymentData({...paymentData, cardNumber: formatCardNumber(e.target.value)})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="1234 5678 9012 3456"
                  />
                  <Lock className="absolute right-3 top-2.5 text-green-500" size={16} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Validade</label>
                  <input
                    type="text"
                    required
                    maxLength={5}
                    value={paymentData.expiryDate}
                    onChange={(e) => setPaymentData({...paymentData, expiryDate: formatExpiryDate(e.target.value)})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="MM/AA"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                  <input
                    type="text"
                    required
                    maxLength={4}
                    value={paymentData.cvv}
                    onChange={(e) => setPaymentData({...paymentData, cvv: e.target.value.replace(/\D/g, '')})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="123"
                  />
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Endereço de Cobrança</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Endereço</label>
                    <input
                      type="text"
                      required
                      value={paymentData.billingAddress.street}
                      onChange={(e) => setPaymentData({...paymentData, billingAddress: {...paymentData.billingAddress, street: e.target.value}})}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Cidade</label>
                      <input
                        type="text"
                        required
                        value={paymentData.billingAddress.city}
                        onChange={(e) => setPaymentData({...paymentData, billingAddress: {...paymentData.billingAddress, city: e.target.value}})}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Estado</label>
                      <input
                        type="text"
                        required
                        value={paymentData.billingAddress.state}
                        onChange={(e) => setPaymentData({...paymentData, billingAddress: {...paymentData.billingAddress, state: e.target.value}})}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">CEP</label>
                    <input
                      type="text"
                      required
                      value={paymentData.billingAddress.zipCode}
                      onChange={(e) => setPaymentData({...paymentData, billingAddress: {...paymentData.billingAddress, zipCode: e.target.value}})}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-sm text-gray-600 bg-green-50 p-3 rounded-lg">
                <Shield className="text-green-500" size={16} />
                <span>Seus dados estão protegidos com criptografia SSL de 256 bits</span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200 disabled:opacity-50 flex items-center justify-center space-x-2"
              >
                {loading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    <Lock size={16} />
                    <span>Confirmar Pagamento - R$ {totalPrice.toLocaleString()}</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Booking Summary */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Resumo da Reserva</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">Hóspede:</span>
                <span className="font-medium">{bookingData.guestName}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">Email:</span>
                <span className="font-medium">{bookingData.email}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">Telefone:</span>
                <span className="font-medium">{bookingData.phone}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">Quarto:</span>
                <span className="font-medium">{room?.name}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">Check-in:</span>
                <span className="font-medium">{new Date(bookingData.checkIn).toLocaleDateString('pt-BR')}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">Check-out:</span>
                <span className="font-medium">{new Date(bookingData.checkOut).toLocaleDateString('pt-BR')}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">Hóspedes:</span>
                <span className="font-medium">{bookingData.guests}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">Noites:</span>
                <span className="font-medium">{totalNights}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">Preço por noite:</span>
                <span className="font-medium">R$ {room?.price}</span>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-6">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-800">Total:</span>
                  <span className="text-2xl font-bold text-green-600">R$ {totalPrice.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}