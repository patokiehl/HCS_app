import { useState, useEffect } from 'react';

/**
 * Custom React hook that simulates a "shoulder attack" event.
 * @param {number} intervalDuration - The interval duration in milliseconds
 *                                    between each trigger attempt. Default is 60000.
 * @param {number} triggerChance - The probability (between 0 and 1) that the
 *                                 "shoulder attack" will be triggered during an interval. Default is 0.5.
 * @param {number} activeDuration - The duration in milliseconds that the
 *                                  "shoulder attack" remains active once triggered. Default is 5000.
 * @returns {boolean} - A boolean indicating whether the "shoulder attack" is currently active.
 */

const useShoulderAttack = (
  intervalDuration: number = 60000,
  triggerChance: number = 0.5,
  activeDuration: number = 5000,
): boolean => {
  const [shoulderAttack, setShoulderAttack] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < triggerChance) {
        setShoulderAttack(true);
        setTimeout(() => {
          setShoulderAttack(false);
        }, activeDuration);
      }
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [intervalDuration, triggerChance, activeDuration]);

  return shoulderAttack;
};

export default useShoulderAttack;
