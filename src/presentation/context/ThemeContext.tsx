import React, {PropsWithChildren, use, useEffect, useState} from 'react';
import {View, Text, useColorScheme} from 'react-native';
import {darkColors, lighColors, ThemeColors} from '../../config/theme/theme';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';

type themeColor = 'light' | 'dark';

interface ThemeContextProps {
  currentTheme: themeColor;
  isDark: boolean;
  colors: ThemeColors;
  setTheme: (theme: themeColor) => void;
}

export const ThemeContext = React.createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: PropsWithChildren) => {
  const colorScheme = useColorScheme();
  const [currentTheme, setCurrentTheme] = useState<themeColor>('light');

  const isDark = currentTheme === 'dark';
  const colors = currentTheme === 'dark' ? darkColors : lighColors;

  useEffect(() => {
    if (colorScheme === 'dark') {
      setCurrentTheme('dark');
    } else {
      setCurrentTheme('light');
    }
  }, [colorScheme]);

  const setTheme = (theme: themeColor) => {
    setCurrentTheme(theme);
  };
  // render
  return (
    <NavigationContainer theme={isDark?DarkTheme:DefaultTheme} >

    <ThemeContext.Provider
      value={{
        currentTheme: currentTheme,
        isDark: isDark,
        colors: colors,
        setTheme: setTheme,
      }}>
      {children}
    </ThemeContext.Provider>
      </NavigationContainer>
  );
};
