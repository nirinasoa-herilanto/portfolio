import React from 'react';
import style from './FormationItem.module.css';

import { IFormation } from '@nhr/utils';

export type FormationItemProps = {
  className?: string;
  data: IFormation;
};

/**
 * Use to display a formation item
 */
const FormationItem: React.FC<FormationItemProps> = ({ className, data }) => {
  return (
    <div className={`${style['formation-item']} ${className || ''}`}>
      <div>{data.formation_name}</div>
    </div>
  );
};

export default FormationItem;
