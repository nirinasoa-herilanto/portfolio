import React from 'react';
import style from './Hero.module.css';

import { Summary } from '@nhr/components';

export type HeroProps = {
  className?: string;
};

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <div className={`${style.hero} ${className || ''}`}>
      <Summary />
    </div>
  );
};

export default Hero;
