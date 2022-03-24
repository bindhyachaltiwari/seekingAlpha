import { useEffect, useRef, useState } from 'react';
import { VoidFunc } from '../types';

export default function useTimer(callback: () => void, interval: number) {
  const [started, setStarted] = useState(true);
  const ref = useRef<VoidFunc>();
  ref.current = callback;

  useEffect(
    () => {
      if (started) {
        const intervalId = setInterval(() => {
          if (ref && ref.current) {
            ref.current()
          }
        }, interval);
        return () => clearInterval(intervalId);
      }
    },
    [started,
     interval],
  );

  return {
    started,
    toggle() {
      setStarted(state => !state);
    },
  };
}
