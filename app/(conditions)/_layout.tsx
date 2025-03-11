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

// pass in different conditions with props to keep the experiment different
// conditions we are testing - flashing border, show camera, alert icon, dim screen, vibrations on phone, screen shake, alert popup = 6 conditions Latin square = min of 6 people ideally 24 as that gives us 4 sets of data - I think
// person 1 tests 1,2,3,4,5,6
// person 2 tests 2,3,4,5,6,1
// person 3 tests 3,4,5,6,1,2
// person 4 tests 4,5,6,1,2,3
// person 5 tests 5,6,1,2,3,4
// person 6 tests 6,1,2,3,4,5

// then we start again 4x
// can I create a function that sets the order of the condition screens following dynamic programming?
