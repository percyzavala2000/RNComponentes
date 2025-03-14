import React from 'react'
import { View, Text, StyleProp, ViewStyle } from 'react-native'
import { globalStyles } from '../../../config/theme/theme';

type CustomViewProps = {
  style?:StyleProp<ViewStyle>
  children?:React.ReactNode
  margin?:boolean
    
  }

export const CustomView = ({style,children,margin=false}:CustomViewProps) => {
// render
  return (
    <View style={[globalStyles.mainContainer,margin? globalStyles.globalMargin:null,style]} >
     {children}
    </View>
  )
}
