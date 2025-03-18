import React, { useContext } from 'react'
import { View, Text, StyleSheet, Switch, Platform } from 'react-native'
import { ThemeContext } from '../../context/ThemeContext';

type CustomSwichProps = {
  isOn:boolean;
  text:string;
  onChange:(value:boolean)=>void
}

export const CustomSwich = ({isOn,text,onChange}:CustomSwichProps) => {
    const{colors}=useContext(ThemeContext)

// render
  return (
    <View style={[styles.swichRow,{backgroundColor:colors.cardBackground}]} >
      {
        text && <Text style={{color:colors.text}} >{text}</Text>
      }
     
      <Switch
          /* trackColor={{false: '#767577', true: '#81b0ff'}} */
          /* thumbColor={isOn ? '#f5dd4b' : '#f4f3f4'} */
          thumbColor={Platform.OS === 'android' ? colors.primary : ''}
          ios_backgroundColor="#3e3e3e"
          onValueChange={onChange}
          value={isOn}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  swichRow:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginVertical:10
  }
})