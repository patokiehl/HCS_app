import { Link, router } from 'expo-router';
import { Text, View, Pressable } from 'react-native';
import '../global.css';

import { useCamera } from '@/hooks/useCamera';
import { AntDesign } from '@expo/vector-icons';

export default function IndexPage() {
  const { hasPermission } = useCamera();

  if (!hasPermission) {
    console.log('no permission');
    return (
      <View className="flex-1 items-center justify-center">
        <Text>Requesting camera permissions...</Text>
      </View>
    );
  }

  const handlePress = (num: number) => {
    router.push(`/(conditions)?order=${num}`);
  };

  return (
    <>
      <View className="flex-1 items-center justify-center">
        <Text className="text-3xl text-blue-500">Patrick says hi</Text>
        <Link href="/test">
          <Text>Test</Text>
        </Link>
        <Link href="/home">
          <Text>Home</Text>
        </Link>
        <Link href="/broken">
          <Text>Broken</Text>
        </Link>
        <Link href="/(conditions)">
          <Text>Border</Text>
        </Link>
        <AntDesign name="warning" size={40} color="red" />
      </View>
      <View className="flex-1 items-start justify-items-center border-spacing-5">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <Pressable
            key={num}
            onPress={() => handlePress(num)}
            className="m-2 bg-blue-500 px-4 py-2 rounded">
            <Text className="text-white text-xl">Button {num}</Text>
          </Pressable>
        ))}
      </View>
    </>
  );
}
