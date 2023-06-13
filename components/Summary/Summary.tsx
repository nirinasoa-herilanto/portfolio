import React from 'react';
import Link from 'next/link';
import style from './Summary.module.css';

import { sumWording } from './summary.wording';

import { TextGradiant } from '@nhr/components';

export type SummaryProps = {
  className?: string;
};

const Summary: React.FC<SummaryProps> = ({ className }) => {
  return (
    <div className={`${style.summary} ${className || ''}`}>
      <div className="summary__header text-slate-800 dark:text-slate-400">
        {sumWording.greeting}
      </div>

      <div className="summary__content">
        <div className="text-slate-800 dark:text-slate-400">
          {`I'm `}
          <TextGradiant>{sumWording.firstName}</TextGradiant>
        </div>

        <div className="text-slate-800 dark:text-slate-400">
          {sumWording.jobTitle}
        </div>
      </div>

      <Link className={style['summary__link']} href={'/about'}>
        more info
      </Link>
    </div>
  );
};

export default Summary;
