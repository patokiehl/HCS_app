import { useCameraPermissions } from 'expo-camera';

export const useCamera = () => {
  const [permissionResponse, requestPermission] = useCameraPermissions();

  return {
    hasPermission: permissionResponse?.status === 'granted',
    requestPermission,
  };
};
