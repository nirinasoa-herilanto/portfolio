import React from 'react';
import style from './FormationList.module.css';

import { IFormation } from '@nhr/utils';

import { FormationItem } from '@nhr/components';

export type FormationListProps = {
  className?: string;
  data: IFormation[];
};

/**
 * Use to display a list of formation
 */
const FormationList: React.FC<FormationListProps> = ({ className, data }) => {
  return (
    <ul className={`${style['formation-list']} ${className || ''}`}>
      {data.map((formation) => (
        <li key={formation._id}>
          <FormationItem data={formation} />
        </li>
      ))}
    </ul>
  );
};

export default FormationList;
