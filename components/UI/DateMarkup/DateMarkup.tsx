import React from 'react';

import { FcCalendar } from 'react-icons/fc';

export type DateMarkupProps = {
  className?: string;
  startedAt: string;
  endAt: string;
};

const DateMarkup: React.FC<DateMarkupProps> = ({
  className,
  startedAt,
  endAt,
}) => {
  return (
    <div className={`date-markup ${className || ''} flex items-center gap-2`}>
      <FcCalendar />
      <span>{`${startedAt || ''} - ${endAt || ''}`}</span>
    </div>
  );
};

export default DateMarkup;
