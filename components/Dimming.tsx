import { useEffect, useRef } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { useBrightness } from '../hooks/useBrightness';
import * as Brightness from 'expo-brightness';

const DimmingOn = ({ visible }: { visible: boolean }) => {
  const { brightness, hasBrightPerms } = useBrightness();
  const isFocused = useIsFocused();
  const originalBrightnessRef = useRef<number | null>(null);

  useEffect(() => {
    const dimScreen = async () => {
      if (hasBrightPerms && brightness !== null && visible && isFocused) {
        // Save original brightness once
        if (originalBrightnessRef.current === null) {
          originalBrightnessRef.current = brightness;
        }
        try {
          await Brightness.setBrightnessAsync(0.1);
        } catch (error) {
          console.error('Error setting brightness:', error);
        }
      }
    };

    const restoreBrightness = async () => {
      if (hasBrightPerms && originalBrightnessRef.current !== null) {
        try {
          await Brightness.setBrightnessAsync(originalBrightnessRef.current);
          originalBrightnessRef.current = null;
        } catch (error) {
          console.error('Error restoring brightness:', error);
        }
      }
    };

    if (visible && isFocused) {
      dimScreen();
    } else {
      restoreBrightness();
    }

    return () => {
      restoreBrightness();
    };
  }, [visible, hasBrightPerms, brightness, isFocused]);

  return null;
};

export default DimmingOn;
