import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { cssInterop } from 'nativewind';

const StyledAnimatedView = cssInterop(Animated.View, { className: 'style' });

const FlashingBorder = ({ visible }: { visible: boolean }) => {
  const borderAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(borderAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: false,
          }),
          Animated.timing(borderAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: false,
          }),
        ]),
      ).start();
    } else {
      borderAnim.stopAnimation();
    }
  }, [visible, borderAnim]);

  const borderColor = borderAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgba(255,0,0,0.2)', 'rgba(255,0,0,1)'],
  });

  if (!visible) return null;

  return (
    <StyledAnimatedView
      style={{ borderColor }}
      className="absolute inset-0 border-[5px]"
      pointerEvents="none"
    />
  );
};

export default FlashingBorder;
