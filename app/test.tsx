import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import FlashingBorder from '../components/FlashingBorder';
import useShoulderAttack from '../hooks/useShoulderAttack';
import PopupOutput from '@/components/Popup';
export default function TestPage() {
  const shoulderAttack = useShoulderAttack(5000, 1, 5000);

  // Local state to manually trigger the shoulder attack
  const [manualAttack, setManualAttack] = useState(false);

  const triggerManualAttack = () => {
    setManualAttack(true);
    setTimeout(() => {
      setManualAttack(false);
    }, 5000);
  };
  // test to check that the conditions are working as intended
  const attackActive = shoulderAttack || manualAttack;

  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
      <PopupOutput visible={attackActive} />
      <Text className="text-xl mb-4">Test Page</Text>
      <FlashingBorder visible={false} />
      <Text className="mt-4">Shoulder Attack is {attackActive ? 'Active' : 'Inactive'}</Text>
      <Pressable onPress={triggerManualAttack} className="mt-4 bg-blue-500 px-4 py-2 rounded">
        <Text className="text-white">Trigger Shoulder Attack</Text>
      </Pressable>
    </View>
  );
}
