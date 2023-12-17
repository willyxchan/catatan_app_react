// UserContext.js
import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (token) => {
    // Implementasikan login dengan menyimpan token dan mengatur status pengguna
    setUser({ token });
  };

  const logout = () => {
    // Implementasikan logout dengan menghapus token dan mengatur status pengguna
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
