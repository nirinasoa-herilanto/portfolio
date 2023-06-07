'use client';

import React from 'react';
import Link from 'next/link';
import style from './Welcoming.module.css';

import { welcomeWording } from './welcoming.wording';

// import { useAppStore } from '@nhr/store';

export type WelcomingProps = {
  className?: string;
};

/**
 * Welcoming Component
 */
const Welcoming: React.FC<WelcomingProps> = ({ className }) => {
  return (
    <div className={`${style.welcoming} ${className || ''}`}>
      <h1 className="text-blue-500">{welcomeWording.title}</h1>
      <p>{welcomeWording.subtitle}</p>
      <p>{welcomeWording.content}</p>
      <Link className={style['repo-link']} href={welcomeWording.repoLink}>
        Source code
      </Link>
      <div>Email account: {welcomeWording.email}</div>
      <div className="text-blue-800 font-bold">{welcomeWording.author}</div>
    </div>
  );
};

export default Welcoming;
