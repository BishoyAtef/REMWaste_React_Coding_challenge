import { createContext, useContext, useEffect, useState } from 'react';

const SelectedSkipContext = createContext();

export const SelectedSkipProvider = ({ children }) => {
  const [selectedSkip, setSelectedSkip] = useState(() => {
    const stored = localStorage.getItem('selectedSkip');
    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    if (selectedSkip) {
      localStorage.setItem('selectedSkip', JSON.stringify(selectedSkip));
    } else {
      localStorage.removeItem('selectedSkip');
    }
  }, [selectedSkip]);

  return (
    <SelectedSkipContext.Provider value={{ selectedSkip, setSelectedSkip }}>
      {children}
    </SelectedSkipContext.Provider>
  );
};

export const useSelectedSkip = () => useContext(SelectedSkipContext);
