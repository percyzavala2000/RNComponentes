import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {Button} from '../../components/ui/Button';
import {ThemeContext} from '../../context/ThemeContext';


export const ChangeThemeScreen = () => {
  const {setTheme, currentTheme,colors} = useContext(ThemeContext);
  // render
  return (
    <CustomView margin>
      <Title title={`Cambiar tema ${currentTheme}`} safe />
      <Button text="Light" onPress={() => setTheme('light')} />
      <View style={{height: 10}} />
      <Button text="Dark" onPress={() => setTheme('dark')} />
      <View style={{height: 10}} />
      <Text style={{color:colors.text}} >{JSON.stringify(colors, null, 3)}</Text>
    </CustomView>
  );
};
