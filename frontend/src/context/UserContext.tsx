import React, { createContext, useState, useContext } from 'react';

type UserType = 'regular' | 'admin';

interface UserContextType {
  userType: UserType;
  setUserType: (type: UserType) => void;
  username: string;
  socialCredit: number;
  achievements: number;
}

const defaultContext: UserContextType = {
  userType: 'regular',
  setUserType: () => {},
  username: '@LOGEECK',
  socialCredit: 100,
  achievements: 13,
};

const UserContext = createContext<UserContextType>(defaultContext);

export const useUser = () => useContext(UserContext);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userType, setUserType] = useState<UserType>('regular');
  const [username] = useState('@LOGEECK');
  const [socialCredit] = useState(100);
  const [achievements] = useState(13);

  return (
    <UserContext.Provider
      value={{
        userType,
        setUserType,
        username,
        socialCredit,
        achievements,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
