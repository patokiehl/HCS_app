import { useEffect } from 'react';
import { Alert } from 'react-native';

const AlertActive = ({ visible }: { visible: boolean }) => {
  useEffect(() => {
    if (visible) {
      Alert.alert(
        'Alert!',
        'An alert condition has been met.',
        [{ text: 'OK', onPress: () => console.log('Alert acknowledged') }],
        { cancelable: true },
      );
    }
  }, [visible]);

  return null;
};

export default AlertActive;
