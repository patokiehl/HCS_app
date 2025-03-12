import * as Brightness from 'expo-brightness';
import { useState, useEffect } from 'react';

export const useBrightness = () => {
  const [brightness, setBrightness] = useState<number | null>(null);
  const [hasBrightPerms, setHasPermission] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Brightness.requestPermissionsAsync();
      if (status === 'granted') {
        setHasPermission(true);
        console.log('we have brightness control');
        const currentBrightness = await Brightness.getBrightnessAsync();
        setBrightness(currentBrightness);
      } else {
        setHasPermission(false);
      }
    })();
  }, []);

  return { brightness, hasBrightPerms };
};
