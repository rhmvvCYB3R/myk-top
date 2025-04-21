"use client";

import Navbar from '../components/Navbar';
import Link from 'next/link';
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <Navbar />

      <section
        className="relative h-screen bg-cover bg-center pt-20 fade-in"
        style={{
          backgroundImage: "url('/restaurant-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center p-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg fade-up">
            Witamy w MYK Restauracja 🍽️
          </h1>

          <p className="mb-8 max-w-2xl text-lg sm:text-xl md:text-2xl drop-shadow-md fade-up motion-safe:delay-[0.3s]">
            Odkryj wykwintne dania, przytulną atmosferę i wyjątkową obsługę. Zarezerwuj stolik lub zamów dostawę już teraz.
          </p>

          <div className="space-x-2 sm:space-x-4 flex flex-wrap justify-center scale-in motion-safe:delay-[0.6s]">
            <Link href="/menu" className="bg-red-600 hover:bg-red-700 px-5 py-2.5 rounded-xl font-semibold shadow-lg transition transform hover:scale-105 text-sm sm:text-base">
              menu
            </Link>

            <Link href="/booking" className="bg-yellow-500 hover:bg-yellow-600 px-5 py-2.5 rounded-xl font-semibold shadow-lg transition transform hover:scale-105 text-sm sm:text-base">
              Rezerwacja stolika
            </Link>

            <Link href="/order" className="bg-green-600 hover:bg-green-700 px-5 py-2.5 rounded-xl font-semibold shadow-lg transition transform hover:scale-105 text-sm sm:text-base">
              Zamów
            </Link>
          </div>

        </div>
      </section>

      <section className="py-20 px-6 sm:px-12 md:px-16 bg-white text-center fade-up motion-safe:delay-[0.2s]">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-800">
          Dlaczego nas wybierają?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
          {[
            {
              title: 'Wysoka jakość',
              icon: '⭐',
              text: 'Każde danie przygotowywane jest z dbałością o szczegóły i pasją.',
            },
            {
              title: 'Profesjonalni kucharze',
              icon: '👨‍🍳',
              text: 'Nasi szefowie kuchni – mistrzowie sztuki kulinarnej.',
            },
            {
              title: 'Żywa atmosfera',
              icon: '🎵',
              text: 'Ciesz się muzyką na żywo i niepowtarzalną atmosferą każdego wieczoru.',
            },
            {
              title: 'Strona restauracji została stworzona przez Maksim, Yusif, Kirill',
              icon: '👨‍💻',
              text: 'Zespół programistów, którzy dbają o każdy detal.',
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className={`bg-gray-100 p-6 rounded-2xl shadow hover:shadow-xl transition transform hover:scale-105 scale-in motion-safe:delay-[${0.2 * idx}s]`}
            >
              <div className="text-4xl sm:text-5xl mb-4">{item.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
