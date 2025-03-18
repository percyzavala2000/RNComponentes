import 'react-native-gesture-handler';
import {DarkTheme, DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {NavigationStack} from './presentation/navigator/NavigationStack';
import {PropsWithChildren, useContext} from 'react';
import {ThemeContext, ThemeProvider} from './presentation/context/ThemeContext';


const AppState = ({children}: PropsWithChildren) => {
    const{isDark}=useContext(ThemeContext)
  return (
    <NavigationContainer theme={isDark?DarkTheme:DefaultTheme} >
     {children}
    </NavigationContainer>
  );
};
const AppTheme=({children}:PropsWithChildren)=>{
  return (
    <ThemeProvider>
      <AppState> 
      {children}
    </AppState>
    </ThemeProvider>
  )
}


export const App = () => {
  return (
  <AppTheme>
    <NavigationStack />
  </AppTheme>
  );
};
