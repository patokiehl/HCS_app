import React from 'react';
import { View, Text } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

interface PopupOutputProps {
  visible: boolean;
}

const PopupOutput = ({ visible }: PopupOutputProps) => {
  if (!visible) return null;
  return (
    <View className="absolute top-20 left-20">
      <AntDesign name="warning" size={40} color="red" />
      <Text className="text-red-500 text-lg">Popup</Text>
    </View>
  );
};

export default PopupOutput;
