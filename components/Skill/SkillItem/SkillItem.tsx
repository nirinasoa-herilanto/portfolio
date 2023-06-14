import React from 'react';
import style from './SkillItem.module.css';

import { ISkill } from '@nhr/utils';
import { ProgressBar } from '@nhr/components';

export type SkillItemProps = {
  className?: string;
  data: ISkill;
};

/**
 * Use to display a skill item
 */
const SkillItem: React.FC<SkillItemProps> = ({ className, data }) => {
  return (
    <div className={`${style['skill-item']} ${className || ''}`}>
      <div className={`${style['skill-item__name']}`}>{data.skill_name}</div>
      <ProgressBar value={data.rating} />
    </div>
  );
};

export default SkillItem;
