'use client';

import React from 'react';
import style from './Card.module.css';

export type CardProps = {
  className?: string;
  children: React.ReactNode;
} & JSX.IntrinsicElements['div'];

const Card: React.FC<CardProps> = ({ className, children, ...rest }) => {
  return (
    <div className={`${style.card} bg-white dark:bg-blue-100`} {...rest}>
      {children}
    </div>
  );
};

export default Card;
