import { Room } from '../types';

export const rooms: Room[] = [
  {
    id: '1',
    name: 'Suíte Presidencial',
    type: 'presidential',
    description: 'Nossa suíte mais luxuosa com vista panorâmica da cidade, banheira de hidromassagem e sala de estar privativa.',
    price: 1200,
    images: [
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/271897/pexels-photo-271897.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    amenities: ['Wi-Fi Gratuito', 'Ar Condicionado', 'TV 65"', 'Minibar', 'Room Service 24h', 'Banheira de Hidromassagem'],
    maxGuests: 4,
    size: '120m²',
    features: ['Vista Panorâmica', 'Sala de Estar', 'Varanda Privativa', 'Cozinha Completa', 'Sala de Jantar']
  },
  {
    id: '2',
    name: 'Suíte Executiva',
    type: 'executive',
    description: 'Espaçosa suíte executiva perfeita para viajantes de negócios, com escritório privativo e acesso ao lounge executivo.',
    price: 650,
    images: [
      'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/90317/pexels-photo-90317.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    amenities: ['Wi-Fi Gratuito', 'Ar Condicionado', 'TV 55"', 'Cofre Digital', 'Escritório', 'Acesso Lounge'],
    maxGuests: 3,
    size: '85m²',
    features: ['Vista da Cidade', 'Escritório Privativo', 'Varanda', 'Lounge Executivo', 'Impressora']
  },
  {
    id: '3',
    name: 'Quarto Deluxe',
    type: 'deluxe',
    description: 'Quarto elegante e confortável com decoração moderna e todas as comodidades necessárias para uma estadia perfeita.',
    price: 380,
    images: [
      'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    amenities: ['Wi-Fi Gratuito', 'Ar Condicionado', 'TV 43"', 'Minibar', 'Cofre', 'Secador de Cabelo'],
    maxGuests: 2,
    size: '45m²',
    features: ['Vista Jardim', 'Cama King Size', 'Banheiro Moderno', 'Varanda', 'Mesa de Trabalho']
  },
  {
    id: '4',
    name: 'Quarto Standard',
    type: 'standard',
    description: 'Quarto confortável e aconchegante com excelente custo-benefício, ideal para estadias práticas e agradáveis.',
    price: 220,
    images: [
      'https://images.pexels.com/photos/271897/pexels-photo-271897.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    amenities: ['Wi-Fi Gratuito', 'Ar Condicionado', 'TV 32"', 'Cofre', 'Secador de Cabelo', 'Frigobar'],
    maxGuests: 2,
    size: '28m²',
    features: ['Cama Queen', 'Banheiro Privativo', 'Mesa de Trabalho', 'Guarda-roupa', 'Poltrona']
  }
];