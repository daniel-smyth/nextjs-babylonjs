/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';

import THEMES from '../constants/Themes';

const initialState = {
  theme: THEMES.DEFAULT,
  setTheme: (_theme: string) => {}
};
const ThemeContext = React.createContext(initialState);

type ThemeProviderProps = {
  children: React.ReactNode;
};

function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, _setTheme] = React.useState<string>(initialState.theme);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme) {
      _setTheme(JSON.parse(storedTheme));
    }
  }, []);

  const setTheme = (newTheme: string) => {
    localStorage.setItem('theme', JSON.stringify(newTheme));
    _setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };
