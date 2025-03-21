import { Tabs } from 'expo-router';
import React from 'react';
import { useOrder } from '@/hooks/useOrder';

type ConditionScreen = {
  name: string;
  title: string;
};

const initialOrdering: ConditionScreen[] = [
  { name: 'BorderCondition1', title: 'C 1' },
  { name: 'CameraCondition2', title: 'C 2' },
  { name: 'AlertCondition3', title: 'C 3' },
  { name: 'VibrationCondition4', title: 'C 4' },
  { name: 'PopupCondition5', title: 'C 5' },
  { name: 'DimCondition6', title: 'C 6' },
];

function reorderConditions(order: number): ConditionScreen[] {
  const idx = initialOrdering.findIndex((screen) => screen.title === `C ${order}`);
  if (idx === -1) return initialOrdering;
  return [...initialOrdering.slice(idx), ...initialOrdering.slice(0, idx)];
}

export default function ConditionsLayout() {
  const startingOrder = useOrder();
  const screens = reorderConditions(startingOrder);

  return (
    <Tabs>
      {screens.map((screen) => (
        <Tabs.Screen
          key={screen.name}
          name={screen.name}
          options={{ title: screen.title, headerShown: false }}
        />
      ))}
      <Tabs.Screen name="index" options={{ href: null, headerShown: false }} />
    </Tabs>
  );
}
