import React from 'react';
import { FcDocument } from 'react-icons/fc';

export type DescriptionProps = {
  className?: string;
  label?: string;
  description: string;
};

/**
 * Use to display a long paragraph or description of project
 */
const Description: React.FC<DescriptionProps> = ({
  className,
  label,
  description,
}) => {
  return (
    <div className={`description ${className || ''}`}>
      <div className="mb-4 flex items-center gap-2">
        <FcDocument /> {`${label || 'Description'}:`}
      </div>

      <p>{description || '---'}</p>
    </div>
  );
};

export default Description;
