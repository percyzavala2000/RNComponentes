
import {View, Text, StyleSheet, Pressable, Animated} from 'react-native';
import {colors} from '../../../config/theme/theme';
import { useAnimation } from '../../hooks/useAnimation';
import { Easing } from 'react-native';

export const Animation101Screen = () => {
 const { fadeIn, fadeOut, animateOpacity, animatedTop,startMovingTopPosicion } = useAnimation();

  // render
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.purpleBox,
          {
            opacity: animateOpacity,
            transform: [
              {
                translateY:animatedTop,
              },
            ],
          },
        ]}
      />
      <Pressable onPress={()=>{fadeIn({});startMovingTopPosicion({initialPosition:-100,easing:Easing.elastic(1),duration:750})}} style={{marginTop: 10}}>
        <Text>FadeIn</Text>
      </Pressable>
      <Pressable onPress={()=>fadeOut({})} style={{marginTop: 10}}>
        <Text>FadeOut</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: colors.primary,
    width: 150,
    height: 150,
  },
});
