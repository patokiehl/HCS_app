import React, { useEffect, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { CameraView } from 'expo-camera';
import { useCamera } from '../hooks/useCamera';
import { useIsFocused } from '@react-navigation/native';

const CameraPreview = ({ visible }: { visible: boolean }) => {
  const { hasPermission, permissionResponse } = useCamera();
  const [isCameraOn, setIsCameraOn] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (!hasPermission && permissionResponse) {
      Alert.alert('Camera permission not granted');
    } else if (hasPermission && isFocused) {
      setIsCameraOn(true);
      console.log(isCameraOn);
    }
  }, [hasPermission, permissionResponse, isCameraOn, isFocused]);

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
