import React, { createContext, useContext } from "react";

// Create a new context
export const UserContext = createContext();

// Custom hook to access the username from the context
export const useUsername = () => useContext(UserContext);
