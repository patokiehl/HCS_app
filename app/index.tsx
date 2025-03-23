import { router } from 'expo-router';
import { Text, View, Pressable, Modal, TextInput, Button } from 'react-native';
import '../global.css';
import { useCamera } from '@/hooks/useCamera';
import { useBrightness } from '@/hooks/useBrightness';
import React, { useState } from 'react';
import { useUser } from '@/hooks/UserIDContexthook';

export default function IndexPage() {
  const { hasPermission } = useCamera();
  console.log('the user has granted permissions', hasPermission);

  const { hasBrightPerms } = useBrightness();
  console.log('the user has given brightness perms', hasBrightPerms);

  const { setUserId } = useUser();
  const [modalVisible, setModalVisible] = useState(true);

  const handlePress = (num: number) => {
    router.push(`/(conditions)?order=${num}`);
  };

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View className="flex-1 justify-center items-center bg-black/50">
          <View className="w-4/5 bg-white p-5 rounded-lg">
            <Text className="text-lg mb-3">Enter your User ID:</Text>
            <TextInput
              placeholder="User ID"
              onChangeText={(text) => setUserId(parseInt(text, 10) || 0)}
              className="h-10 border border-gray-400 mb-3 px-2"
              keyboardType="numeric"
            />
            <Button title="Submit" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>

      <View className="flex-1 justify-center items-center">
        <Text className="text-3xl text-blue-500">HCS shoulder surfing</Text>
      </View>
      <View className="flex-1 items-center mb-20">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <Pressable
            key={num}
            onPress={() => handlePress(num)}
            className="m-2 bg-blue-500 px-4 py-2 rounded">
            <Text className="text-white text-xl">Condition Order {num}</Text>
          </Pressable>
        ))}
      </View>
    </>
  );
}
