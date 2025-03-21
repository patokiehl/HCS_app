import { View } from 'react-native';
import React, { useEffect } from 'react';

import CameraPreview from '@/components/CameraPreview';
import useShoulderAttack from '@/hooks/useShoulderAttack';
import TextView from '@/components/TextView';
import InputButton from '@/components/NativeButton';
import { useTimer } from '@/hooks/useTimer';

export default function CameraCondition2() {
  const shoulderAttack = useShoulderAttack(7000, 1, 3000);
  const { startTimer, stopTimer } = useTimer();
  const CameraOnStyle = { height: 200, width: 200, borderWidth: 1, borderColor: 'black' };
  const CameraOffStyle = { height: 0, width: 0, borderWidth: 1, borderColor: 'black' };


  useEffect(() => {
    if (shoulderAttack) {
      startTimer();

    }
  }, [shoulderAttack, startTimer]);

  const handlePress = () => {
    const elapsedTime = stopTimer();
    console.log('Elapsed time (ms):', elapsedTime);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={shoulderAttack ? CameraOnStyle : CameraOffStyle}>
  <CameraPreview visible={true} style={{ flex: 1 }} />
</View>
      <View>
        <TextView
          texts={[
            'A whole lot of text is far to much to render on this screen, what happens if we keep going, does it eventully break and the app no longer work - camera Alert',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ipsum sapien. Vivamus ut lectus nec massa blandit ultricies vitae.',
            '3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ipsum sapien. Vivamus ut lectus nec massa blandit ultricies vitae.',
            '4Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ipsum sapien. Vivamus ut lectus nec massa blandit ultricies vitae.',
            '5Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ipsum sapien. Vivamus ut lectus nec massa blandit ultricies vitae.',
          ]}
        />
      </View>
      <InputButton onPress={handlePress} title="Submit" />
    </View>
  );
}
