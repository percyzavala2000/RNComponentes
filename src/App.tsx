import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationStack } from './presentation/navigator/NavigationStack';
import { HomeScreen } from './presentation/screens/home/HomeScreen';

export const App = () => {
// render
  return (
  

    <NavigationContainer>
      <NavigationStack/>
    </NavigationContainer>
    
  )
}
