import { useEffect, useState } from "react";
import { calculateCountdown } from "../../utils/calculateCountdown";

export const useCountdown = (targetDate) => {
  const initialTime = {
    days: 0,
    hours: 0,
    min: 0,
    sec: 0
  }
  const [time, setTime] = useState(initialTime)

  useEffect(() => {
    const interval = setInterval(() => {
      const date = calculateCountdown(targetDate);
      date ? setTime(date) : clearInterval(interval)
    }, 1000);
    return () => {
      clearInterval(interval);
    }
  })
  const { days, hours, min, sec } = time
  return {
    days,
    hours,
    min,
    sec
  }
}