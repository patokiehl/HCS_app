import React, { useEffect, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { CameraView, CameraType } from 'expo-camera';
import { useCamera } from '../hooks/useCamera';

const CameraPreview = ({ visible }: { visible: boolean }) => {
  const { hasPermission } = useCamera();
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [facing] = useState<CameraType>('front');

  useEffect(() => {
    if (!hasPermission) {
      Alert.alert('Camera permission not granted');
    } else {
      setIsCameraOn(true);
    }
  }, [hasPermission]);

  if (!hasPermission) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Camera permission not granted</Text>
      </View>
    );
  }

  if (!isCameraOn) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>No camera turned on</Text>
      </View>
    );
  }

  if (!visible) {
    return null;
  }
  return <CameraView style={{ flex: 1 }} facing={facing} />;
};

export default CameraPreview;
