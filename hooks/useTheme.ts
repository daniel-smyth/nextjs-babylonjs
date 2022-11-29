import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error('ThemeContext must be placed within ThemeProvider');
  return context;
};

export default useTheme;
