import { useEffect } from 'react';
import { Alert } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { useTimer } from '@/hooks/useTimer';
type AlertProps = {
  visible: boolean;
};

const AlertActive = ({ visible }: AlertProps) => {
  const isFocused = useIsFocused();
  const { startTimer, stopTimer } = useTimer();

  useEffect(() => {
    if (visible && isFocused) {
      startTimer();
      Alert.alert(
        'Alert!',
        'You are being watched',
        [
          {
            text: 'OK',
            onPress: () => {
              const elapsedTime = stopTimer();
              console.log('Elapsed time (ms):', elapsedTime);
            },
          },
        ],
        { cancelable: false },
      );
    }
  }, [visible, isFocused, startTimer, stopTimer]);

  return null;
};

export default AlertActive;
