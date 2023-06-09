'use client';

import React from 'react';
import style from './DarkLightButton.module.css';

import { useAppStore } from '@nhr/store';

import { BsSun } from 'react-icons/bs';
import { FaMoon } from 'react-icons/fa';

export type DarkLightButtonProps = {
  className?: string;
};

/**
 * Use to switch on dark/light mode
 */
const DarkLightButton: React.FC<DarkLightButtonProps> = ({ className }) => {
  const {
    ui: { isDark, switchThemeHandler },
  } = useAppStore();

  return (
    <div className={`dark-light-btn ${className || ''}`}>
      {!isDark ? (
        <FaMoon
          className={`${style.icon} ${style.dark}`}
          onClick={switchThemeHandler}
        />
      ) : (
        <BsSun
          className={`${style.icon} ${style.light}`}
          onClick={switchThemeHandler}
        />
      )}
    </div>
  );
};

export default DarkLightButton;
