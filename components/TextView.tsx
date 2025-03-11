import React from 'react';
import { View, Text } from 'react-native';

type TextViewProps = {
  texts?: string[];
};

export default function TextView({
  texts = ['Text 1', 'Text 2', 'Text 3', 'Text 4', 'Text 5'],
}: TextViewProps): JSX.Element {
  return (
    <View className="flex flex-col space-y-2 p-4 bg-gray-100 rounded-lg">
      {texts.map((text, index) => (
        <View key={index} className="border border-gray-300 p-10 rounded-md">
          <Text className="text-base text-gray-800">{text}</Text>
        </View>
      ))}
    </View>
  );
}
