import React from 'react';
import {StyleSheet, Animated} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
});

interface Props {
  children: React.ReactNode;
  isFirst: boolean;
  swipe: Animated.ValueXY;
  tiltSign: Animated.Value;
}

const Card: React.FC<Props> = ({
  children,
  isFirst,
  swipe,
  tiltSign,
  ...rest
}) => {
  const rotate = Animated.multiply(swipe.x, tiltSign).interpolate({
    inputRange: [-100, 0, 100],
    outputRange: ['8deg', '0deg', '-8deg'],
  });

  const animatedCardStyle = {
    transform: [...swipe.getTranslateTransform(), {rotate}],
  };

  return (
    <Animated.View
      style={[styles.container, isFirst && animatedCardStyle]}
      {...rest}>
      {children}
    </Animated.View>
  );
};

export default Card;
