import { Link, router } from 'expo-router';
import { Text, View, Pressable } from 'react-native';
import '../global.css';

import { useCamera } from '@/hooks/useCamera';
import { useBrightness } from '@/hooks/useBrightness';
import { FontAwesome } from '@expo/vector-icons';

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
        <Text className="text-3xl text-blue-500">Patrick says hi</Text>
        <Link href="/test">
          <Text className="text-blue-400 text-3xl font-bold">Test</Text>
        </Link>
        <Link href="/Camera">
          <Text className="text-blue-400 text-3xl font-bold">Broken</Text>
        </Link>
        <Link href="/(conditions)">
          <Text>Border</Text>
        </Link>
        <FontAwesome name="info-circle" className="color-black dark:color-white text-4xl" />
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
