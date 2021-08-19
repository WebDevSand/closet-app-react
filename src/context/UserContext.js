import React, { createContext, useState, useCallback } from "react";

export const UserContext = createContext(null);

export function UserProvider(props) {
  const [user, setUser] = useState(null);
  const login = useCallback((name) => setUser(name), []);
  const logout = useCallback(() => setUser(null), []);
  return (
    <UserContext.Provider value={{ user, setUser, login, logout }}>
      {props.children}
    </UserContext.Provider>
  );
}
