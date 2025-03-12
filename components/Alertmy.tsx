import { useEffect } from 'react';
import { Alert } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

const AlertActive = ({ visible }: { visible: boolean }) => {
  const isFocused = useIsFocused();

  useEffect(() => {
    if (visible && isFocused) {
      Alert.alert(
        'Alert!',
        'You are being watched',
        [{ text: 'OK', onPress: () => console.log('Alert acknowledged') }],
        { cancelable: true },
      );
    }
  }, [visible, isFocused]);

  return null;
};

export default AlertActive;
