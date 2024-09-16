'use client'

// navContext.js
import React, { createContext, useState } from 'react';

export const ShowContext = createContext();

export const ShowProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [scheduleOpen, setScheduleOpen] = useState(false)

  return (
    <ShowContext.Provider value={{ show, setShow, scheduleOpen, setScheduleOpen }}>
      {children}
    </ShowContext.Provider>
  );
};
