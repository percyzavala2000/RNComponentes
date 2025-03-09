import React, {use} from 'react';
import {View, Text} from 'react-native';
import {colors, globalStyles} from '../../../config/theme/theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';


type TitleProps = {
  title: string;
  safe?: boolean;
  white?: boolean;
};

export const Title = ({title, safe = false, white = false}: TitleProps) => {
  const {top} = useSafeAreaInsets();
  
  return (
    <Text
      style={{
        ...globalStyles.title,
        marginTop: safe ? top : 0,
        marginBottom: 10,
        color: white ? 'white' : colors.text,
      }}>
      {title}
    </Text>
  );
};
