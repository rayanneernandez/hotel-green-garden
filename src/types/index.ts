export interface Room {
  id: string;
  name: string;
  type: string;
  description: string;
  price: number;
  images: string[];
  amenities: string[];
  maxGuests: number;
  size: string;
  features: string[];
}

export interface Booking {
  id: string;
  roomId: string;
  guestName: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled';
}

export interface PaymentInfo {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardholderName: string;
  billingAddress: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
}