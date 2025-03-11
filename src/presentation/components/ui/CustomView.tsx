import React from 'react'
import { View, Text, StyleProp, ViewStyle } from 'react-native'
import { globalStyles } from '../../../config/theme/theme';

type CustomViewProps = {
  style?:StyleProp<ViewStyle>
  children?:React.ReactNode
    
  }

export const CustomView = ({style,children}:CustomViewProps) => {
// render
  return (
    <View style={[globalStyles.mainContainer,style]} >
     {children}
    </View>
  )
}
