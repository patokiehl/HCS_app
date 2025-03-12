import { View, ScrollView } from 'react-native';
import React from 'react';

import TextView from '@/components/TextView';
import CameraPreview from '@/components/CameraPreview';
export default function CameraCondition2() {
  return (
    <ScrollView>
      <View>
        <CameraPreview visible={true} />
        <TextView
          texts={[
            'A whole lot of text is far to much to render on this screen, what happens if we keep going, does it eventully break and the app no longer work - Cam Alert',
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
