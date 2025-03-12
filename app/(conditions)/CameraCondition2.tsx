import { View, Text } from 'react-native';
import React from 'react';

import CameraPreview from '@/components/CameraPreview';
import useShoulderAttack from '@/hooks/useShoulderAttack';
export default function CameraCondition2() {
  const shoulderAttack = useShoulderAttack(7000, 1, 3000);
  return (
    <View style={{ flex: 1 }}>
      <Text>Camera page yayy</Text>
      <CameraPreview visible={shoulderAttack} />
    </View>
  );
}
