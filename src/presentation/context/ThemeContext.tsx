import React, {PropsWithChildren, use, useEffect, useState} from 'react';
import {View, Text,useColorScheme} from 'react-native';
import {darkColors, lighColors, ThemeColors} from '../../config/theme/theme';

type themeColor = 'light' | 'dark';

interface ThemeContextProps {
  currentTheme: themeColor;
  isDark: boolean;
  colors: ThemeColors;
  setTheme: (theme: themeColor) => void;
}

export const ThemeContext = React.createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: PropsWithChildren) => {
  const colorScheme=useColorScheme()
  const [currentTheme, setCurrentTheme] = useState<themeColor>('light');

  useEffect(() => {
    if(colorScheme==='dark'){
      setCurrentTheme('dark')
    }else{
      setCurrentTheme('light')
    }
   
  }, [ colorScheme]);

  const setTheme = (theme: themeColor) => {
    setCurrentTheme(theme);
  };
  // render
  return (
    <ThemeContext.Provider
      value={{
        currentTheme: currentTheme,
        isDark: currentTheme !== 'light',
        colors: currentTheme === 'light' ? lighColors : darkColors,
        setTheme: setTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
