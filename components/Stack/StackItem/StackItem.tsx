import React from 'react';

export type StackItemProps = {
  className?: string;
  stack: string;
};

const StackItem: React.FC<StackItemProps> = ({ className, stack }) => {
  return (
    <li
      className={`stack-item p-2 dark:text-slate-950 bg-blue-200 
      ${className || ''}`}
      key={stack}
    >
      {stack}
    </li>
  );
};

export default StackItem;
