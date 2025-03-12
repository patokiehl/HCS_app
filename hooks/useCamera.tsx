import { useEffect } from 'react';
import { useCameraPermissions } from 'expo-camera';

export const useCamera = () => {
  const [permissionResponse, requestPermission] = useCameraPermissions();
  useEffect(() => {
    requestPermission();
  }, [requestPermission]);

  return {
    hasPermission: permissionResponse?.status === 'granted',
    permissionResponse,
  };
};
