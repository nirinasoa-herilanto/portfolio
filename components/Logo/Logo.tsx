'use client';

import React from 'react';
import style from './Logo.module.css';
import { useRouter } from 'next/navigation';

export type LogoProps = {
  className?: string;
};

const Logo: React.FC<LogoProps> = ({ className }) => {
  const router = useRouter();

  const navigateToHomeHandler = () => router.push('/');

  return (
    <div className={`${style.logo} ${className || ''}`}>
      <span
        className={`text-gray-900 dark:text-yellow-500 cursor-pointer`}
        onClick={navigateToHomeHandler}
      >
        nhr
      </span>
    </div>
  );
};

export default Logo;
