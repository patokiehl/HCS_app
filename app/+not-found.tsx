import React from 'react';
import { Link, Stack } from 'expo-router';
import { View, Text } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View className="flex-1 items-center justify-center">
        <Text className="text-3xl text-blue-500">Patrick says hi</Text>
        <Link href="/index">
          <Text>Return to index</Text>
        </Link>
      </View>
    </>
  );
}
