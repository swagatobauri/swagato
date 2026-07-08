import { useState, useEffect } from 'react';

export function useLocalTime(timeZone: string = 'Asia/Kolkata') {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
          timeZone: timeZone,
        }) + ' IST' // Keeping the suffix explicit per original design, could also map timezone abbr
      );
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [timeZone]);

  return time;
}
