import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

interface InputButtonProps {
  onPress?: () => void;
  title?: string;
}

const InputButton: React.FC<InputButtonProps> = ({ onPress = () => {}, title = 'Submit' }) => {
  return (
    <View className="absolute bottom-0 left-0 right-0 p-4 z-[100]">
      <TouchableOpacity className="bg-[#007AFF] p-3 rounded-[5px] items-center" onPress={onPress}>
        <Text className="text-white text-base">{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputButton;
