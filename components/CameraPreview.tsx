import React, { useEffect, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { CameraView } from 'expo-camera';
import { useCamera } from '../hooks/useCamera';

const CameraPreview = ({ visible }: { visible: boolean }) => {
  const { hasPermission, permissionResponse } = useCamera();
  const [isCameraOn, setIsCameraOn] = useState(false);

  useEffect(() => {
    if (!hasPermission && permissionResponse) {
      Alert.alert('Camera permission not granted');
    } else if (hasPermission) {
      setIsCameraOn(true);
      console.log(isCameraOn);
    }
  }, [hasPermission, permissionResponse, isCameraOn]);

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
  return <CameraView style={{ flex: 1 }} facing={'front'} />;
};

export default CameraPreview;
