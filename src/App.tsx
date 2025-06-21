import React, { useState } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import HomePage from './components/HomePage';
import RoomsPage from './components/RoomsPage';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';
import RoomDetails from './components/RoomDetails';
import BookingForm from './components/BookingForm';
import BookingConfirmation from './components/BookingConfirmation';
import Footer from './components/Footer';
import { rooms } from './data/rooms';
import { Booking } from './types';

type Page = 'home' | 'rooms' | 'services' | 'contact' | 'booking' | 'room-details' | 'confirmation';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedRoomId, setSelectedRoomId] = useState<string>('');
  const [confirmedBooking, setConfirmedBooking] = useState<Booking | null>(null);

  const handleNavigation = (page: Page) => {
    setCurrentPage(page);
  };

  const handleRoomSelect = (roomId: string) => {
    setSelectedRoomId(roomId);
    setCurrentPage('room-details');
  };

  const handleRoomBook = (roomId: string) => {
    setSelectedRoomId(roomId);
    setCurrentPage('booking');
  };

  const handleBookingComplete = (booking: Booking) => {
    setConfirmedBooking(booking);
    setCurrentPage('confirmation');
  };

  const handleNewBooking = () => {
    setSelectedRoomId('');
    setConfirmedBooking(null);
    setCurrentPage('home');
  };

  const selectedRoom = rooms.find(room => room.id === selectedRoomId);

  return (
    <div className="min-h-screen bg-gray-50">
      {currentPage !== 'confirmation' && (
        <Header currentPage={currentPage} onNavigate={handleNavigation} />
      )}
      
      {currentPage === 'home' && (
        <>
          <HomePage 
            onRoomSelect={handleRoomSelect}
            onRoomBook={handleRoomBook}
          />
          <Footer />
        </>
      )}
      
      {currentPage === 'rooms' && (
        <>
          <RoomsPage
            onRoomSelect={handleRoomSelect}
            onRoomBook={handleRoomBook}
          />
          <Footer />
        </>
      )}
      
      {currentPage === 'services' && (
        <>
          <ServicesPage />
          <Footer />
        </>
      )}
      
      {currentPage === 'contact' && (
        <>
          <ContactPage />
          <Footer />
        </>
      )}
      
      {currentPage === 'room-details' && selectedRoom && (
        <RoomDetails
          room={selectedRoom}
          onBack={() => setCurrentPage('rooms')}
          onBook={handleRoomBook}
        />
      )}
      
      {currentPage === 'booking' && (
        <BookingForm
          selectedRoomId={selectedRoomId}
          onBack={() => setCurrentPage('home')}
          onComplete={handleBookingComplete}
        />
      )}
      
      {currentPage === 'confirmation' && confirmedBooking && (
        <BookingConfirmation
          booking={confirmedBooking}
          onNewBooking={handleNewBooking}
        />
      )}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;