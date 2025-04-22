'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar';

export default function ReservationPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [people, setPeople] = useState(1);
  const [specialRequest, setSpecialRequest] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Логика отправки данных (например, на сервер)
    alert(`Резервация подтверждена!\nИмя: ${name}\nДата: ${date}\nВремя: ${time}\nКоличество людей: ${people}\nОсобые пожелания: ${specialRequest}`);
    
    // Очистка формы после отправки
    setName('');
    setEmail('');
    setDate('');
    setTime('');
    setPeople(1);
    setSpecialRequest('');
  };

  return (
    <div className="min-h-screen bg-white bg-opacity-60 backdrop-blur-xl px-4 py-8">
      <Navbar />

      <div className="max-w-6xl mx-auto pt-16 sm:pt-20">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-red-600 mb-8 sm:mb-10">
          Zarezerwuj Stolik
        </h1>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-md max-w-lg mx-auto space-y-6">
          {/* Name and Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Imię</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          {/* Date and Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Data</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Godzina</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          {/* Number of People */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Liczba Osób</label>
            <input
              type="number"
              value={people}
              onChange={(e) => setPeople(Number(e.target.value))}
              min="1"
              max="20"
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Special Request */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Szczególne Życzenia</label>
            <textarea
              value={specialRequest}
              onChange={(e) => setSpecialRequest(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Jeśli masz jakieś szczególne życzenia, wpisz je tutaj..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-red-600 text-white rounded-lg hover:bg-red-500 transition-all duration-200"
          >
            Zarezerwuj Stolik
          </button>
        </form>
      </div>
    </div>
  );
}
