import { useRef } from 'react';

export function useTimer() {
  const startTimeRef = useRef<number | null>(null);

  const startTimer = () => {
    startTimeRef.current = Date.now();
  };


  const stopTimer = () => {
    if (startTimeRef.current !== null) {
      const elapsedTime = Date.now() - startTimeRef.current;
      startTimeRef.current = null;
      return elapsedTime;
    }
    return 0;
  };

  return { startTimer, stopTimer };
}
