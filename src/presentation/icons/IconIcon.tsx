import { StyleProp, TextStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type IconIconProps = {
  name: string;
  size?: number;
  color?: string;
  style?: StyleProp<TextStyle>;
}

export const IconIcon = ({name,color="black",size=30,style}:IconIconProps) => {
// render
  return (
    <Icon name={name} size={size} color={color} style={style} />
    
  )
}
