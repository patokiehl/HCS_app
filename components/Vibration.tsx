import { useEffect } from 'react';
import { Vibration } from 'react-native';

const VibrationActive = ({ visible }: { visible: boolean }) => {
  useEffect(() => {
    if (visible) {
      Vibration.vibrate(2000);
    }
  }, [visible]);

  return null;
};

export default VibrationActive;
