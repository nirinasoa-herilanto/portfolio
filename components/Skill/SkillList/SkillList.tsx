import React from 'react';
import style from './SkillList.module.css';

import { ISkill } from '@nhr/utils';
import SkillItem from '../SkillItem/SkillItem';

export type SkillListProps = {
  className?: string;
  data: ISkill[];
};

/**
 * Use to display a list of skill
 */
const SkillList: React.FC<SkillListProps> = ({ className, data }) => {
  return (
    <ul className={`${style['skill-list']} ${className || ''}`}>
      {data.map((skill) => (
        <li key={skill._id}>
          <SkillItem data={skill} />
        </li>
      ))}
    </ul>
  );
};

export default SkillList;
