import Icon from 'react-native-vector-icons/Ionicons';

type IconIconProps = {
  name: string;
  size?: number;
  color?: string;
}

export const IconIcon = ({name,color="black",size=30}:IconIconProps) => {
// render
  return (
    <Icon name={name} size={size} color={color} />
    
  )
}
