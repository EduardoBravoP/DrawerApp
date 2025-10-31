import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import Animated, {
  useAnimatedStyle,
  interpolate,
} from 'react-native-reanimated';
import {useDrawerProgress} from '@react-navigation/drawer';

const {width} = Dimensions.get('window');

type AnimatedDrawerContentProps = {
  component: React.ComponentType<any>;
  [key: string]: any;
};

const AnimatedDrawerContent: React.FC<AnimatedDrawerContentProps> = ({
  component: Component,
  ...props
}) => {
  const progress = useDrawerProgress();

  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(progress.value, [0, 1], [1, 0.8]);
    const translateX = interpolate(progress.value, [0, 1], [0, width * 0.2]);
    const rotate = interpolate(progress.value, [0, 1], [0, -10]);
    const borderRadius = interpolate(progress.value, [0, 1], [0, 20]);

    return {
      transform: [
        {perspective: 1000},
        {scale},
        {translateX},
        {rotate: `${rotate}deg`},
      ],
      borderRadius,
      overflow: 'hidden',
    };
  });

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Component {...props} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
});

export default AnimatedDrawerContent;
