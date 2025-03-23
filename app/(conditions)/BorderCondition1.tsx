import { View, ScrollView } from 'react-native';
import React, { useEffect } from 'react';

import FlashingBorder from '@/components/FlashingBorder';
import TextView from '@/components/TextView';
import useShoulderAttack from '@/hooks/useShoulderAttack';
import InputButton from '@/components/NativeButton';
import { useTimer } from '@/hooks/useTimer';
import { insertUserTimes } from '@/utils/Database';
import { useUser } from '@/hooks/UserIDContexthook';

export default function BorderCondition1() {
  const shoulderAttack = useShoulderAttack(5000, 1, 2000);
  const { startTimer, stopTimer } = useTimer();
  const statement = insertUserTimes;
  const { userId } = useUser();
  console.log(userId);
  console.log('border reloaded');

  useEffect(() => {
    if (shoulderAttack) {
      startTimer();
    }
  }, [shoulderAttack, startTimer]);

  const handlePress = () => {
    const elapsedTime = stopTimer();
    console.log('Elapsed time (ms):', elapsedTime);
    statement(userId, 'BorderCondition', elapsedTime);
    console.log(statement);
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlashingBorder visible={shoulderAttack} />
      <View style={{ height: 400, width: '90%', overflow: 'hidden', marginTop: 20 }}>
        <ScrollView>
          <TextView
            texts={[
              'A whole lot of text is far too much to render on this screen, what happens if we keep going, does it eventually break and the app no longer work - Border thing',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ipsum sapien. Vivamus ut lectus nec massa blandit ultricies vitae.',
              '3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ipsum sapien. Vivamus ut lectus nec massa blandit ultricies vitae.',
              '4Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ipsum sapien. Vivamus ut lectus nec massa blandit ultricies vitae.',
              '5Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ipsum sapien. Vivamus ut lectus nec massa blandit ultricies vitae.',
            ]}
          />
        </ScrollView>
      </View>
      <InputButton onPress={handlePress} title="Submit" />
    </View>
  );
}
