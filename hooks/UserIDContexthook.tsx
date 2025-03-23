import React, { createContext, useContext, useState } from 'react';

interface UserContextType {
  userId: any;
  setUserId: (userId: number) => void;
}

const UserContext = createContext<UserContextType>({
  userId: null,
  setUserId: () => {},
});

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userId, setUserId] = useState<number>(0);
  return <UserContext.Provider value={{ userId, setUserId }}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
