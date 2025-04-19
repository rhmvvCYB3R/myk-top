"use client";
import { useState } from "react";

export default function Auth({ closeModal }: { closeModal: () => void }) {
  const [isRegister, setIsRegister] = useState(false);
  const [agree, setAgree] = useState(false);

  return (
    <div className="relative w-[95vw] max-w-md rounded-2xl bg-white/60 backdrop-blur-xl p-8 shadow-2xl border border-white/20 animate-fadeInScale">
      <h2 className="text-2xl font-semibold text-center text-slate-800 mb-6">
        {isRegister ? "Rejestracja" : "Logowanie"}
      </h2>

      <form className="space-y-4">
        {isRegister && (
          <>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Imię"
                className="w-1/2 px-4 py-2 border rounded-lg bg-white/70"
              />
              <input
                type="text"
                placeholder="Nazwisko"
                className="w-1/2 px-4 py-2 border rounded-lg bg-white/70"
              />
            </div>
            <input
              type="tel"
              placeholder="Telefon"
              className="w-full px-4 py-2 border rounded-lg bg-white/70"
            />
          </>
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-lg bg-white/70"
        />

        <input
          type="password"
          placeholder="Hasło"
          className="w-full px-4 py-2 border rounded-lg bg-white/70"
        />

        {isRegister && (
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="agree"
              checked={agree}
              onChange={() => setAgree(!agree)}
              className="w-4 h-4"
            />
            <label htmlFor="agree" className="text-sm text-slate-700">
              Akceptuję{" "}
              <a href="#" className="text-blue-600 underline">
                regulamin
              </a>
            </label>
          </div>
        )}

        <button
          type="submit"
          className={`w-full py-2 rounded-lg text-white font-semibold transition ${
            isRegister
              ? agree
                ? "bg-red-600 hover:bg-red-500"
                : "bg-gray-400 cursor-not-allowed"
              : "bg-red-600 hover:bg-red-500"
          }`}
          disabled={isRegister && !agree}
        >
          {isRegister ? "Zarejestruj się" : "Zaloguj się"}
        </button>
      </form>

      <div className="mt-4 text-sm text-center text-slate-700">
        {isRegister ? "Masz już konto?" : "Nie masz konta?"}{" "}
        <button
          className="text-red-600 underline font-medium"
          onClick={() => setIsRegister(!isRegister)}
        >
          {isRegister ? "Zaloguj się" : "Zarejestruj się"}
        </button>
      </div>

      <button
        className="absolute top-4 right-4 text-slate-600 hover:text-red-600"
        onClick={closeModal}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
