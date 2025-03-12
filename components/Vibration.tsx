import { useEffect } from 'react';
import { Vibration } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

const VibrationActive = ({ visible }: { visible: boolean }) => {
  const isFocused = useIsFocused();

  useEffect(() => {
    if (visible && isFocused) {
      Vibration.vibrate(2000);
    }
  }, [visible, isFocused]);

  return null;
};

export default VibrationActive;
