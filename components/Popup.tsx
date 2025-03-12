import React from 'react';
import { View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

interface PopupOutputProps {
  visible: boolean;
}

const PopupOutput = ({ visible }: PopupOutputProps) => {
  if (!visible) return null;
  return (
    <View style={{ position: 'absolute', top: 50, left: 50, alignItems: 'center' }}>
      <AntDesign name="warning" size={40} color="red" />
    </View>
  );
};

export default PopupOutput;
