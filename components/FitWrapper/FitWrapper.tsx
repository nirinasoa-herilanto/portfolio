import React from 'react';

export type FitWrapperProps = {
  children: React.ReactNode;
  className?: string;
} & JSX.IntrinsicElements['div'];

/**
 * Use to wrap component with max-width of 1024px
 */
const FitWrapper: React.FC<FitWrapperProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div className={`fit ${className || ''}`} {...rest}>
      {children}
    </div>
  );
};

export default FitWrapper;
