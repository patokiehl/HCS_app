import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { CameraView } from 'expo-camera';
import { useCamera } from '../hooks/useCamera';
import { useIsFocused } from '@react-navigation/native';

type CameraPreviewProps = {
  visible: boolean;
  style?: object;
};

const CameraPreview = ({ visible, style }: CameraPreviewProps) => {
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

  if (!visible) {
    return null;
  }
  return <CameraView style={style ? style : { flex: 1 }} facing={'front'} />;
};

export default CameraPreview;
