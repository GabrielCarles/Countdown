import React from 'react';
import Divider from '../Divider'
import { useCountdown } from '../hooks/useCountdown';
import { addLeadingZeros} from '../../utils/addLeadingZeros';

const Countdown = ({ date }) => {
  const { days, hours, min, sec } = useCountdown(date)
  return (
    <div className="countdown">
      <span className="countdown-col">
        <strong>{addLeadingZeros(days)}</strong>
        <p>{days === 1 ? 'Day' : 'Days'}</p>
      </span>
      <Divider char=':' />
      <span className="countdown-col">
        <strong>{addLeadingZeros(hours)}</strong>
        <p>Hours</p>
      </span>
      <Divider char=':' />
      <span className="countdown-col">
        <strong>{addLeadingZeros(min)}</strong>
        <p>Minutes</p>
      </span>
      <Divider char=':' />
      <span className="countdown-col">
        <strong>{addLeadingZeros(sec)}</strong>
        <p>Seconds</p>
      </span>
    </div>
  );
}

export default Countdown;
