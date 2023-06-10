import React from 'react';

export type ProgressBarProps = {
  className?: string;
  value: number;
};

/**
 * Use to display a progress bar by value
 * @param {number} value  between 0 to 5
 */
const ProgressBar: React.FC<ProgressBarProps> = ({ className, value }) => {
  let fillWidth = 0;

  if (value <= 0 || value > 5) {
    fillWidth = 1.5 * 2 * 10;
  } else {
    fillWidth = value * 2 * 10;
  }

  return (
    <div
      className={`w-full bg-gray-200 rounded-full dark:bg-gray-400 
      ${className || ''}`}
    >
      <div
        className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
        style={{ width: `${fillWidth}%` }}
      >
        {`${value}/5`}
      </div>
    </div>
  );
};

export default ProgressBar;
