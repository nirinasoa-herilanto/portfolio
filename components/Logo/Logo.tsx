import React from 'react';
import style from './Logo.module.css';

export type LogoProps = {
  className?: string;
};

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`${style.logo} ${className || ''}`}>
      <span className={`text-gray-900 dark:text-yellow-500`}>Nhr</span>
    </div>
  );
};

export default Logo;
