import { ScrollView, View } from 'react-native';
import React, { useEffect } from 'react';
import TextView from '@/components/TextView';

import AlertActive from '@/components/Alertmy';
import useShoulderAttack from '@/hooks/useShoulderAttack';
import InputButton from '@/components/NativeButton';

export default function AlertCondition3() {
  const shoulderAttack = useShoulderAttack(7000, 1, 4000);

  useEffect(() => {
    if (shoulderAttack) {
    }
  }, [shoulderAttack]);

  const handlePress = () => {
    console.log('Elapsed time (ms): button pressed:');
  };

  return (
    <View>
      <ScrollView>
        <View>
          <TextView
            texts={[
              'A whole lot of text is far to much to render on this screen, what happens if we keep going, does it eventully break and the app no longer work -  Alert',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ipsum sapien. Vivamus ut lectus nec massa blandit ultricies vitae.',
              '3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ipsum sapien. Vivamus ut lectus nec massa blandit ultricies vitae.',
              '4Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ipsum sapien. Vivamus ut lectus nec massa blandit ultricies vitae.',
              '5Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ipsum sapien. Vivamus ut lectus nec massa blandit ultricies vitae.',
            ]}
          />
        </View>
        <AlertActive visible={shoulderAttack} />
      </ScrollView>
      <InputButton onPress={handlePress} title="submit" />
    </View>
  );
}
