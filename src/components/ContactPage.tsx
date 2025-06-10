import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 to-green-500">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Entre em Contato</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Estamos aqui para ajudar você a planejar a estadia perfeita
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Informações de Contato</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <MapPin className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Endereço</h3>
                    <p className="text-gray-600">
                      Av. Paulista, 1000<br />
                      Bela Vista, São Paulo - SP<br />
                      CEP: 01310-100
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Phone className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Telefones</h3>
                    <p className="text-gray-600">
                      <strong>Reservas:</strong> (11) 9999-8888<br />
                      <strong>Recepção:</strong> (11) 9999-8889<br />
                      <strong>WhatsApp:</strong> (11) 99999-8888
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Mail className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">E-mails</h3>
                    <p className="text-gray-600">
                      <strong>Geral:</strong> contato@hotelreal.com.br<br />
                      <strong>Reservas:</strong> reservas@hotelreal.com.br<br />
                      <strong>Eventos:</strong> eventos@hotelreal.com.br
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Clock className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Horário de Atendimento</h3>
                    <p className="text-gray-600">
                      <strong>Recepção:</strong> 24 horas<br />
                      <strong>Reservas:</strong> 08:00 - 22:00<br />
                      <strong>Concierge:</strong> 24 horas
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-12">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Localização</h3>
                <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center">
                  <p className="text-gray-600">Mapa interativo - Av. Paulista, 1000</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Envie sua Mensagem</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="text-green-500" size={40} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Mensagem Enviada!</h3>
                    <p className="text-gray-600">Entraremos em contato em breve.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Assunto</label>
                        <select
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        >
                          <option value="">Selecione um assunto</option>
                          <option value="reserva">Reserva</option>
                          <option value="evento">Eventos</option>
                          <option value="servicos">Serviços</option>
                          <option value="reclamacao">Reclamação</option>
                          <option value="elogio">Elogio</option>
                          <option value="outros">Outros</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                      <textarea
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Descreva sua solicitação ou dúvida..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <Send size={16} />
                      <span>Enviar Mensagem</span>
                    </button>
                  </form>
                )}
              </div>

              {/* Quick Contact */}
              <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Contato Rápido</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">WhatsApp</span>
                    <a href="https://wa.me/5511999998888" className="text-green-600 font-medium hover:text-green-700">
                      (11) 99999-8888
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Reservas</span>
                    <a href="tel:+551199998888" className="text-green-600 font-medium hover:text-green-700">
                      (11) 9999-8888
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">E-mail</span>
                    <a href="mailto:contato@hotelreal.com.br" className="text-green-600 font-medium hover:text-green-700">
                      Enviar E-mail
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}