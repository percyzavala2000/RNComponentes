import React, {PropsWithChildren, useContext} from 'react';
import {View, Text, StyleProp, ViewStyle} from 'react-native';
import {colors} from '../../../config/theme/theme';
import { ThemeContext } from '../../context/ThemeContext';

interface CardProps extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
}

export const Card = ({style, children}: CardProps) => {
    const{colors}=useContext(ThemeContext)
  // render
  return (
    <View
      style={[
        {backgroundColor: colors.cardBackground, borderRadius: 10, padding: 20},
        style,
      ]}>
      {children}
    </View>
  );
};
