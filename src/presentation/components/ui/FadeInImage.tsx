import React, { useState } from 'react'
import { ActivityIndicator, Animated, Image, ImageStyle, StyleProp } from 'react-native';
import { View, Text } from 'react-native'
import { useAnimation } from '../../hooks/useAnimation';

type FadeInImageProps = {
  uri: string
  style?:StyleProp<ImageStyle>
}

export const FadeInImage = ({uri,style}:FadeInImageProps) => {

  const {animateOpacity,fadeIn}=useAnimation();

  const [isLoading, setIsLoading] = useState(true)
// render
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
    {isLoading &&( <ActivityIndicator color='grey' size={30} style={{position:'absolute'}} /> )}

    <Animated.Image
      source={{uri}}
      onLoadEnd={()=>{fadeIn({});setIsLoading(false) }}
      
      style={[style,{opacity:animateOpacity}]}/>
      </View>
  )
}
