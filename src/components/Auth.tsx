"use client";
import { useEffect, useRef, useState } from "react";
import { loginUser, registerUser } from "../services/authAPI";

export default function Auth({ closeModal }: { closeModal: () => void }) {
  const modalRef = useRef<HTMLDivElement>(null);

  const [isRegister, setIsRegister] = useState(false);
  const [agree, setAgree] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [firstNameError, setFirstNameError] = useState<string | null>(null);
  const [lastNameError, setLastNameError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);

  const validatePassword = (password: string) => /^(?=.*[A-Z])[A-Za-z0-9]{8,}$/.test(password);
  const validateEmail = (email: string) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const validateName = (name: string) => /^[a-zA-Z]+$/.test(name);
  const validatePhone = (phone: string) => /^\+(\d{1,15})$/.test(phone);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal]);

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(validateEmail(value) ? null : "Email musi być poprawny.");
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(validatePassword(value) ? null : "Hasło niepoprawne.");
  };

  const handleChangeFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFirstName(value);
    setFirstNameError(validateName(value) ? null : "Niepoprawne imię.");
  };

  const handleChangeLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLastName(value);
    setLastNameError(validateName(value) ? null : "Niepoprawne nazwisko.");
  };

  const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhone(value);
    setPhoneError(validatePhone(value) ? null : "Niepoprawny numer telefonu.");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (emailError || passwordError || firstNameError || lastNameError || phoneError) {
      setLoading(false);
      return;
    }

    try {
      if (isRegister) {
        await registerUser(firstName, lastName, phone, email, password);
      } else {
        await loginUser(email, password);
      }
      closeModal();
    } catch (err: any) {
      setError(err.message || "Coś poszło nie tak.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div
        ref={modalRef}
        className="relative w-[95vw] max-w-md rounded-2xl bg-white/60 backdrop-blur-xl p-8 shadow-2xl border border-white/20 animate-fadeInScale"
      >
        <h2 className="text-2xl font-semibold text-center text-slate-800 mb-6">
          {isRegister ? "Rejestracja" : "Logowanie"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegister && (
            <>
              <div className="flex gap-2">
                <div className="w-1/2">
                  <input
                    type="text"
                    placeholder="Imię"
                    value={firstName}
                    onChange={handleChangeFirstName}
                    className="w-full px-4 py-2 border rounded-lg bg-white/70"
                  />
                  {firstNameError && <p className="text-red-600 text-xs">{firstNameError}</p>}
                </div>
                <div className="w-1/2">
                  <input
                    type="text"
                    placeholder="Nazwisko"
                    value={lastName}
                    onChange={handleChangeLastName}
                    className="w-full px-4 py-2 border rounded-lg bg-white/70"
                  />
                  {lastNameError && <p className="text-red-600 text-xs">{lastNameError}</p>}
                </div>
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Telefon"
                  value={phone}
                  onChange={handleChangePhone}
                  className="w-full px-4 py-2 border rounded-lg bg-white/70"
                />
                {phoneError && <p className="text-red-600 text-xs">{phoneError}</p>}
              </div>
            </>
          )}

          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleChangeEmail}
              className="w-full px-4 py-2 border rounded-lg bg-white/70"
            />
            {emailError && <p className="text-red-600 text-xs">{emailError}</p>}
          </div>

          <div>
            <input
              type="password"
              placeholder="Hasło"
              value={password}
              onChange={handleChangePassword}
              className="w-full px-4 py-2 border rounded-lg bg-white/70"
            />
            {passwordError && <p className="text-red-600 text-xs">{passwordError}</p>}
          </div>

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
            disabled={(isRegister && !agree) || loading}
          >
            {loading ? "Ładowanie..." : isRegister ? "Zarejestruj się" : "Zaloguj się"}
          </button>
        </form>

        {error && <p className="text-red-600 text-center">{error}</p>}

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
    </div>
  );
}
