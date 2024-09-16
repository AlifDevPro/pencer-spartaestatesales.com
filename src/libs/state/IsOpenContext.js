'use client'

import React, { createContext, useState } from 'react';

const IsOpenContext = createContext();

export const IsOpenProvider = ({ children }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <IsOpenContext.Provider value={{ isSearchOpen, setIsSearchOpen }}>
      {children}
    </IsOpenContext.Provider>
  );
};

export default IsOpenContext;
