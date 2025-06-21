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
<<<<<<< HEAD
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  createdAt: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string, phone?: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
=======
>>>>>>> 52499e4be17e71838cf0de729eee21e231007f83
}