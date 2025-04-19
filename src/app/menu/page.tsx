'use client';
import { useState } from "react";
import Navbar from '../components/Navbar';

const categories = [
  "Wszystko",
  "Pizza",
  "Sałatki",
  "Napoje",
  "Desery",
  "Zupy",
  "Kebab",
  "Burgery",
  "Makarony",
  "Przystawki",
];

const items = [
  {
    id: 1,
    name: "Margherita",
    description: "Klasyczna pizza z mozzarellą i bazylią",
    price: 25,
    image: "https://images.unsplash.com/photo-1601924582975-4a3b847bfa0c",
    category: "Pizza",
  },
  {
    id: 2,
    name: "Pepperoni",
    description: "Ostra kiełbasa pepperoni, mozzarella, sos pomidorowy",
    price: 30,
    image: "https://images.unsplash.com/photo-1601924928403-1a04c1d1cf1e",
    category: "Pizza",
  },
  {
    id: 3,
    name: "Sałatka Cezar",
    description: "Kurczak, parmezan, grzanki, sos cezar",
    price: 22,
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141",
    category: "Sałatki",
  },
  {
    id: 4,
    name: "Lemoniada",
    description: "Orzeźwiająca lemoniada cytrynowa",
    price: 10,
    image: "https://images.unsplash.com/photo-1562059390-a761a084768e",
    category: "Napoje",
  },
  {
    id: 5,
    name: "Tiramisu",
    description: "Włoski deser z mascarpone i kawą",
    price: 18,
    image: "https://images.unsplash.com/photo-1605452081362-9acff7a1f3d2",
    category: "Desery",
  },
  {
    id: 6,
    name: "Zupa pomidorowa",
    description: "Zupa ze świeżych pomidorów z makaronem",
    price: 15,
    image: "https://images.unsplash.com/photo-1604908811990-259b1b6b54c6",
    category: "Zupy",
  },
  {
    id: 7,
    name: "Kebab z kurczakiem",
    description: "Z warzywami i sosem czosnkowym",
    price: 24,
    image: "https://images.unsplash.com/photo-1631515243345-97c5c628e45b",
    category: "Kebab",
  },
  {
    id: 8,
    name: "Burger wołowy",
    description: "Wołowina, ser, sałata, cebula, sos",
    price: 27,
    image: "https://images.unsplash.com/photo-1613145993481-7c03fef182be",
    category: "Burgery",
  },
  {
    id: 9,
    name: "Spaghetti Carbonara",
    description: "Makaron, boczek, śmietana, parmezan",
    price: 26,
    image: "https://images.unsplash.com/photo-1617196033073-e6f703d57e69",
    category: "Makarony",
  },
  {
    id: 10,
    name: "Bruschetta",
    description: "Chlebek z pomidorami, bazylią i oliwą",
    price: 12,
    image: "https://images.unsplash.com/photo-1585238342028-4bc8c1b3d4d1",
    category: "Przystawki",
  },
];

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("Wszystko");

  const filteredItems =
    selectedCategory === "Wszystko"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (

    <div className="min-h-screen bg-white bg-opacity-60 backdrop-blur-xl px-4 py-1">
      <Navbar />
      
      <div className="max-w-6xl mx-auto py-20">
        <h1 className="text-4xl font-bold text-center text-red-600 mb-10">
          Menu Restauracji
        </h1>

        {/* Kategorie */}
        <div className="flex justify-center gap-3 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-red-600 text-white shadow-lg"
                  : "bg-white text-red-600 border border-red-200 hover:bg-red-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Lista dań */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition-shadow"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-slate-800">
                {item.name}
              </h3>
              <p className="text-slate-600 text-sm mb-2">{item.description}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-lg font-bold text-red-600">
                  {item.price} zł
                </span>
                <button className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-md text-sm">
                  Dodaj 🛒
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
