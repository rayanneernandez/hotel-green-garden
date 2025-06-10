import React from 'react';
import { Star, Wifi, Car, Coffee, Dumbbell, Utensils, Waves, Shield } from 'lucide-react';
import RoomCard from './RoomCard';
import { rooms } from '../data/rooms';

interface HomePageProps {
  onRoomSelect: (roomId: string) => void;
  onRoomBook: (roomId: string) => void;
}

export default function HomePage({ onRoomSelect, onRoomBook }: HomePageProps) {
  const features = [
    { icon: <Wifi size={24} />, title: 'Wi-Fi Gratuito', description: 'Internet de alta velocidade em todos os ambientes' },
    { icon: <Car size={24} />, title: 'Estacionamento', description: 'Vagas gratuitas para todos os hóspedes' },
    { icon: <Coffee size={24} />, title: 'Café da Manhã', description: 'Buffet completo incluído na diária' },
    { icon: <Dumbbell size={24} />, title: 'Academia', description: 'Equipamentos modernos 24 horas' },
    { icon: <Utensils size={24} />, title: 'Restaurante', description: 'Culinária internacional e local' },
    { icon: <Waves size={24} />, title: 'Piscina', description: 'Área de lazer com vista panorâmica' },
    { icon: <Shield size={24} />, title: 'Segurança 24h', description: 'Monitoramento e portaria 24 horas' },
    { icon: <Coffee size={24} />, title: 'Room Service', description: 'Serviço de quarto 24 horas' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Bem-vindo ao
            <span className="block text-green-400">Hotel Green Garden</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Experimente o luxo e conforto em cada detalhe da sua estadia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onRoomBook('')}
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Reservar Agora
            </button>
            <button
              onClick={() => document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-gray-800 transition-all duration-300 transform hover:scale-105"
            >
              Ver Quartos
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Nossas Facilidades</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferecemos uma experiência completa com comodidades de primeira classe
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-green-50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Nossos Quartos</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Escolha entre nossas opções de acomodação, cada uma pensada para seu conforto
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {rooms.map((room) => (
              <RoomCard
                key={room.id}
                room={room}
                onSelect={onRoomSelect}
                onBook={onRoomBook}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">O que nossos hóspedes dizem</h2>
            <p className="text-xl text-gray-600">Experiências reais de quem já se hospedou conosco</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Maria Silva',
                rating: 5,
                comment: 'Excelente hotel! Staff atencioso, quartos limpos e bem equipados. A vista é simplesmente maravilhosa.',
                location: 'São Paulo, SP'
              },
              {
                name: 'João Santos',
                rating: 5,
                comment: 'Melhor custo-benefício da região. Café da manhã delicioso e localização perfeita para negócios.',
                location: 'Rio de Janeiro, RJ'
              },
              {
                name: 'Ana Costa',
                rating: 5,
                comment: 'Ambiente sofisticado e acolhedor. Perfeito para uma lua de mel. Voltaremos com certeza!',
                location: 'Belo Horizonte, MG'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-green-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                <div>
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-500">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-4">
            Pronto para uma experiência inesquecível?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Reserve agora e garante as melhores tarifas e disponibilidade
          </p>
          <button
            onClick={() => onRoomBook('')}
            className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Fazer Reserva Agora
          </button>
        </div>
      </section>
    </div>
  );
}