import React, {useRef} from 'react';
import {View, Text, Animated, StyleSheet, PanResponder} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const Animation102Screen = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  // methods
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {
      useNativeDriver: false,
    }),
    onPanResponderRelease: () => {
      Animated.spring(pan, {
        toValue: {x: 0, y: 0},
        useNativeDriver: false,
      }).start();
    },
  });
  // render
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), styles.purpleBox]}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: 'purple',
    width: 150,
    height: 150,
  },
});
