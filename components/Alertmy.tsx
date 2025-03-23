import { useEffect } from 'react';
import { Alert } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { useTimer } from '@/hooks/useTimer';
import { insertUserTimes } from '@/utils/Database';
import { useUser } from '@/hooks/UserIDContexthook';
type AlertProps = {
  visible: boolean;
};

const AlertActive = ({ visible }: AlertProps) => {
  const isFocused = useIsFocused();
  const { startTimer, stopTimer } = useTimer();
  const statement = insertUserTimes;
  const { userId } = useUser();

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
              statement(userId, 'AlertCondition', elapsedTime);
              console.log(statement);
            },
          },
        ],
        { cancelable: false },
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, isFocused, startTimer, stopTimer]);

  return null;
};

export default AlertActive;
