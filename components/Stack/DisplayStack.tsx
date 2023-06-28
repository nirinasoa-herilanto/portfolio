import React from 'react';
import { FaCode } from 'react-icons/fa';
import StackList from './StackList/StackList';

export type DisplayStackProps = {
  className?: string;
  data: string[];
};

const DisplayStack: React.FC<DisplayStackProps> = ({ className, data }) => {
  return (
    <div className={`tech-stack ${className || ''}`}>
      <div className="mb-4 flex items-center gap-2">
        <FaCode /> {'Stacks:'}
      </div>

      <StackList data={data} />
    </div>
  );
};

export default DisplayStack;
