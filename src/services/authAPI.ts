// src/services/authAPI.ts

export const loginUser = async (email: string, password: string) => {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
  
    if (!response.ok) {
      throw new Error("Ошибка при входе в аккаунт");
    }
  
    return await response.json();
  };
  
  export const registerUser = async (
    name: string,
    surname: string,
    phone: string,
    email: string,
    password: string
  ) => {
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, surname, phone, email, password }),
    });
  
    if (!response.ok) {
      throw new Error("Ошибка при регистрации");
    }
  
    return await response.json();
  };
  