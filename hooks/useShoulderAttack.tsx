import { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';

const useShoulderAttack = (
  intervalDuration: number = 60000,
  triggerChance: number = 0.5,
  activeDuration: number = 5000,
): boolean => {
  const [shoulderAttack, setShoulderAttack] = useState(false);
  const isFocussed = useIsFocused();

  useEffect(() => {
    const interval = setInterval(() => {
      if (isFocussed && Math.random() < triggerChance) {
        setShoulderAttack(true);
        setTimeout(() => {
          setShoulderAttack(false);
        }, activeDuration);
      }
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [intervalDuration, triggerChance, activeDuration, isFocussed]);

  return shoulderAttack;
};

export default useShoulderAttack;
