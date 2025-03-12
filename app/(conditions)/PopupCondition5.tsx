import { View, ScrollView } from 'react-native';
import React from 'react';

import TextView from '@/components/TextView';
import useShoulderAttack from '@/hooks/useShoulderAttack';
import PopupOutput from '@/components/Popup';

export default function PopupCondition5() {
  const shoulderAttack = useShoulderAttack(5000, 1, 2000);
  return (
    <View>
      <ScrollView>
        <TextView
          texts={[
            'A whole lot of text is far to much to render on this screen, what happens if we keep going, does it eventully break and the app no longer work - Popup ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ipsum sapien. Vivamus ut lectus nec massa blandit ultricies vitae.',
            '3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ipsum sapien. Vivamus ut lectus nec massa blandit ultricies vitae.',
            '4Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ipsum sapien. Vivamus ut lectus nec massa blandit ultricies vitae.',
            '5Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ipsum sapien. Vivamus ut lectus nec massa blandit ultricies vitae.',
          ]}
        />
      </ScrollView>
      <PopupOutput visible={shoulderAttack} />
    </View>
  );
}
