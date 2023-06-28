import React from 'react';

export type StackListProps = {
  className?: string;
  data: string[];
};

const StackList: React.FC<StackListProps> = ({ className, data }) => {
  return (
    <ul className={`stack-list ${className || ''} flex gap-2`}>
      {data.map((stack) => (
        <li className="p-2 dark:text-slate-950 bg-blue-200" key={stack}>
          {stack}
        </li>
      ))}
    </ul>
  );
};

export default StackList;
