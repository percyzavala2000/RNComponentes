
import {View, Text, StyleSheet, Pressable, Animated} from 'react-native';
import {colors} from '../../../config/theme/theme';
import { useAnimation } from '../../hooks/useAnimation';
import { Easing } from 'react-native';
import { CustomView } from '../../components/ui/CustomView';
import { Button } from '../../components/ui/Button';

export const Animation101Screen = () => {
 const { fadeIn, fadeOut, animateOpacity, animatedTop,startMovingTopPosicion } = useAnimation();

  // render
  return (
    <CustomView style={styles.container}>
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
      <Button text='FadeIn' onPress={()=>{fadeIn({});startMovingTopPosicion({initialPosition:-100,easing:Easing.elastic(1),duration:750})}} styles={{marginTop: 10}}/>
       
      
      <Button  text='FadeOut' onPress={()=>fadeOut({})} styles={{marginTop: 10}}/>
        
     
    </CustomView>
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
