import React from 'react';
import style from './CertificationList.module.css';

import { ICertification } from '@nhr/utils';

import { CertificationItem } from '@nhr/components';

export type CertificationListProps = {
  className?: string;
  data: ICertification[];
};

const CertificationList: React.FC<CertificationListProps> = ({
  className,
  data,
}) => {
  return (
    <ul className={`${style['certification-list']} ${className || ''}`}>
      {data.map((certification) => (
        <li key={certification._id}>
          <CertificationItem data={certification} />
        </li>
      ))}
    </ul>
  );
};

export default CertificationList;
