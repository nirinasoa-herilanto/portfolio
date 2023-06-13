'use client';

import React from 'react';
import style from './TextGradiant.module.css';

import { useAppStore } from '@nhr/store';

export type TextGradiantProps = {
  className?: string;
  children: React.ReactNode;
};

/**
 * Use to apply a special gradiant on specified text
 */
const TextGradiant: React.FC<TextGradiantProps> = ({ className, children }) => {
  const {
    ui: { isDark },
  } = useAppStore();

  return (
    <span
      className={`${isDark ? style['dark-gradiant'] : style['text-gradiant']}
       ${className || ''}`}
    >
      {children}
    </span>
  );
};

export default TextGradiant;
