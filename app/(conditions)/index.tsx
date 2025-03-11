import { useEffect } from 'react';
import { View, Text } from 'react-native';

import { useOrder } from '@/hooks/useOrder';

export default function RedirectPage() {
  const order = useOrder();

  useEffect(() => {
    if (order) {
      console.log('order');
    } else {
      console.log('no order');
    }
  }, [order]);

  return (
    <View className="flex-1 items-center justify-center m-4">
      <Text className="text-xl m-10">
        Please click on the tabs in order from left to right to experience the app
      </Text>
    </View>
  );
}
