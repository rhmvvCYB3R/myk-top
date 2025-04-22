"use client";
import Link from "next/link";
import { useState } from "react";
import Auth from "./Auth";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAuth, setShowAuth] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { name: "Menu 😊", href: "/menu" },
    { name: "Koszyk 🛒", href: "/about" },
    { name: "Zamów 🍽️", href: "/about" },
    { name: "Opinie 💬", href: "/news" },
    { name: "Nasze restauracje 🍴", href: "/contact" },
    { name: "Rezerwacja stolika 📅", href: "/reservation" },
  ];

  return (
    <div>
      {/* AUTH MODAL */}
      {showAuth && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center backdrop-blur-md bg-white/10">
          <Auth closeModal={() => setShowAuth(false)} />
        </div>
      )}

      <nav className="block w-full max-w-screen px-4 py-4 mx-auto bg-white bg-opacity-90 sticky top-3 shadow lg:px-8 backdrop-blur-lg backdrop-saturate-150 z-[9999]">
        <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
          <Link
            href="/"
            className="mr-4 block cursor-pointer py-1.5 text-red-600 font-bold text-2xl"
          >
            MYK-Restauracja 
          </Link>

          <div className="lg:hidden">
            <button
              className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase transition-all hover:bg-transparent focus:bg-transparent"
              onClick={toggleMobileMenu}
              type="button"
            >
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </span>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`fixed top-0 left-0 min-h-screen w-64 bg-slate-100 shadow-lg transition-transform duration-300 ease-in-out z-50 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} lg:hidden`}>
            <div className="flex flex-row items-center border-b pb-4">
              <Link href="/" className="cursor-pointer text-red-600 font-bold text-xl pt-4 pl-4">
                MYK
              </Link>
              <button onClick={toggleMobileMenu} className="absolute top-4 right-4 text-slate-600 hover:text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col h-full gap-4 p-4">
              {navItems.map((item, index) => (
                <li key={index} className="flex items-center p-1 text-lg gap-x-2 text-slate-600 hover:text-red-500 transition-colors">
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
              <li className="mt-4">
                <button
                  onClick={() => setShowAuth(true)}
                  className="bg-red-600 text-white px-8 py-2 rounded-md hover:bg-red-500"
                >
                  Zaloguj się 🔐
                </button>
              </li>
            </ul>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              {navItems.map((item, index) => (
                <li key={index} className="flex items-center p-1 text-lg gap-x-2 text-slate-600 hover:text-red-500 transition-colors">
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
              <li>
                <button
                  onClick={() => setShowAuth(true)}
                  className="bg-red-600 hover:bg-red-500 text-white px-8 py-2 rounded-md"
                >
                  Zaloguj się 🔐
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
