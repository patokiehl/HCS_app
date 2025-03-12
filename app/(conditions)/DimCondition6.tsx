import { View, ScrollView } from 'react-native';
import React from 'react';

import TextView from '@/components/TextView';
import DimmingOn from '@/components/Dimming';
import useShoulderAttack from '@/hooks/useShoulderAttack';

export default function DimCondition6() {
  const shoulderAttack = useShoulderAttack(5000, 1, 2000);
  return (
    <ScrollView>
      <View>
        <DimmingOn visible={shoulderAttack} />
        <TextView
          texts={[
            'A whole lot of text is far to much to render on this screen, what happens if we keep going, does it eventully break and the app no longer work - Dimming Alert',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ipsum sapien. Vivamus ut lectus nec massa blandit ultricies vitae.',
            '3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ipsum sapien. Vivamus ut lectus nec massa blandit ultricies vitae.',
            '4Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ipsum sapien. Vivamus ut lectus nec massa blandit ultricies vitae.',
            '5Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ipsum sapien. Vivamus ut lectus nec massa blandit ultricies vitae.',
          ]}
        />
      </View>
    </ScrollView>
  );
}
