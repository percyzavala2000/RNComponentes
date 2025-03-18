import React, { use, useContext } from 'react'
import { View, Text, StyleProp, ViewStyle } from 'react-native'
import { globalStyles } from '../../../config/theme/theme';
import { ThemeContext } from '../../context/ThemeContext';

type CustomViewProps = {
  style?:StyleProp<ViewStyle>
  children?:React.ReactNode
  margin?:boolean
    
  }

export const CustomView = ({style,children,margin=false}:CustomViewProps) => {

  const {colors}=useContext(ThemeContext)
// render
  return (
    <View style={[globalStyles.mainContainer,margin? globalStyles.globalMargin:null,{backgroundColor:colors.background},style]} >
     {children}
    </View>
  )
}
