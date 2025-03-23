import { View, ScrollView } from 'react-native';
import React, { useEffect } from 'react';

import TextView from '@/components/TextView';
import useShoulderAttack from '@/hooks/useShoulderAttack';
import PopupOutput from '@/components/Popup';
import InputButton from '@/components/NativeButton';
import { useTimer } from '@/hooks/useTimer';
import { insertUserTimes } from '@/utils/Database';
import { useUser } from '@/hooks/UserIDContexthook';

export default function PopupCondition5() {
  const shoulderAttack = useShoulderAttack(5000, 1, 2000);
  const { startTimer, stopTimer } = useTimer();
  const statement = insertUserTimes;
  const { userId } = useUser();

  useEffect(() => {
    if (shoulderAttack) {
      startTimer();
    }
  }, [shoulderAttack, startTimer]);

  const handlePress = () => {
    const elapsedTime = stopTimer();
    console.log('Elapsed time (ms):', elapsedTime);
    statement(userId, 'PopupCondition', elapsedTime);
    console.log(statement);
  };
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
      <InputButton onPress={handlePress} title="Submit" />
    </View>
  );
}
