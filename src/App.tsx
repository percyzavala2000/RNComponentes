import 'react-native-gesture-handler';
import {NavigationStack} from './presentation/navigator/NavigationStack';
import {ThemeContext, ThemeProvider} from './presentation/context/ThemeContext';




export const App = () => {
  return (
  <ThemeProvider>
    <NavigationStack />
  </ThemeProvider>
  );
};
