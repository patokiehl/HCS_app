import { router } from 'expo-router';
import { Text, View, Pressable } from 'react-native';
import '../global.css';

import { useCamera } from '@/hooks/useCamera';
import { useBrightness } from '@/hooks/useBrightness';

export default function IndexPage() {
  const { hasPermission } = useCamera();
  console.log('the user has granted permissions', hasPermission);

  const { hasBrightPerms } = useBrightness();
  console.log('the user has given brightness perms', hasBrightPerms);
  const handlePress = (num: number) => {
    router.push(`/(conditions)?order=${num}`);
  };

  return (
    <>
      <View className="flex-1 items-center justify-center">
        <Text className="text-3xl text-blue-500">HCS shoulder surfing</Text>
      </View>
      <View className="flex-1 items-center justify-items-center mb-20">
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
