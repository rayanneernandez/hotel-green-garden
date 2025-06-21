import React from 'react';
import { Utensils, Waves, Dumbbell, Car, Wifi, Coffee, Shield, Headphones, Sparkles, Users, Calendar, Gift } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: <Utensils size={32} />,
      title: 'Restaurante Gourmet',
      description: 'Culinária internacional e brasileira com chefs renomados',
      features: ['Café da manhã buffet', 'Almoço à la carte', 'Jantar romântico', 'Room service 24h'],
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: <Waves size={32} />,
      title: 'Spa & Wellness',
      description: 'Centro de bem-estar completo com tratamentos relaxantes',
      features: ['Massagens terapêuticas', 'Sauna e vapor', 'Piscina aquecida', 'Tratamentos faciais'],
      image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: <Dumbbell size={32} />,
      title: 'Academia Premium',
      description: 'Equipamentos de última geração disponíveis 24 horas',
      features: ['Equipamentos modernos', 'Personal trainer', 'Aulas de yoga', 'Vestiários completos'],
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: <Users size={32} />,
      title: 'Eventos & Conferências',
      description: 'Espaços versáteis para eventos corporativos e sociais',
      features: ['Salas de reunião', 'Auditório para 200 pessoas', 'Equipamentos audiovisuais', 'Catering personalizado'],
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const additionalServices = [
    { icon: <Car size={24} />, title: 'Estacionamento Gratuito', description: 'Vagas cobertas para todos os hóspedes' },
    { icon: <Wifi size={24} />, title: 'Wi-Fi de Alta Velocidade', description: 'Internet gratuita em todo o hotel' },
    { icon: <Coffee size={24} />, title: 'Business Center', description: 'Computadores, impressoras e fax' },
    { icon: <Shield size={24} />, title: 'Segurança 24h', description: 'Monitoramento e portaria 24 horas' },
    { icon: <Headphones size={24} />, title: 'Concierge', description: 'Assistência personalizada para passeios' },
    { icon: <Sparkles size={24} />, title: 'Lavanderia', description: 'Serviço de lavanderia e lavagem a seco' },
    { icon: <Calendar size={24} />, title: 'Transfer Aeroporto', description: 'Transporte executivo sob agendamento' },
    { icon: <Gift size={24} />, title: 'Serviços Especiais', description: 'Decoração para ocasiões especiais' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 to-green-500">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Nossos Serviços</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços premium para tornar sua estadia inesquecível
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mb-6 text-green-600">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">{service.title}</h2>
                  <p className="text-xl text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'md:col-start-1' : ''}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Serviços Adicionais</h2>
            <p className="text-xl text-gray-600">Comodidades extras para sua conveniência</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors duration-300">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Hours */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Horários de Funcionamento</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Restaurante</h3>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Café da manhã:</strong> 06:00 - 10:00</p>
                  <p><strong>Almoço:</strong> 12:00 - 15:00</p>
                  <p><strong>Jantar:</strong> 18:00 - 22:00</p>
                  <p><strong>Room Service:</strong> 24 horas</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Spa & Wellness</h3>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Segunda a Sexta:</strong> 08:00 - 20:00</p>
                  <p><strong>Sábados:</strong> 08:00 - 18:00</p>
                  <p><strong>Domingos:</strong> 10:00 - 18:00</p>
                  <p><strong>Piscina:</strong> 06:00 - 22:00</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Academia</h3>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Todos os dias:</strong> 24 horas</p>
                  <p><strong>Personal Trainer:</strong> 06:00 - 22:00</p>
                  <p><strong>Aulas de Yoga:</strong> 07:00 e 18:00</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Outros Serviços</h3>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Concierge:</strong> 24 horas</p>
                  <p><strong>Business Center:</strong> 24 horas</p>
                  <p><strong>Lavanderia:</strong> 08:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}