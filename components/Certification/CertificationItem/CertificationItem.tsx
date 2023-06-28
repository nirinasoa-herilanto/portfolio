'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import style from './CertificationItem.module.css';

import { ICertification } from '@nhr/utils';

import { FcApproval, FcCalendar, FcInfo } from 'react-icons/fc';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { Description, DisplayStack, InProgress } from '@nhr/components';

export type CertificationItemProps = {
  className?: string;
  data: ICertification;
};

const CertificationItem: React.FC<CertificationItemProps> = ({
  className,
  data,
}) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const displayDetailHandler = () => setShowDetails((prevState) => !prevState);

  return (
    <div className={`${style['certification-item']} ${className || ''}`}>
      <div className={`${style['certification-item__header']}`}>
        <span className="text-blue-500 dark:text-white">
          {data.certification_name}
        </span>

        {showDetails ? (
          <FaMinus
            className={style['certification-item__icon']}
            onClick={displayDetailHandler}
          />
        ) : (
          <FaPlus
            className={style['certification-item__icon']}
            onClick={displayDetailHandler}
          />
        )}
      </div>

      {showDetails && (
        <div
          className={`${style['certification-item__content']} mt-4 flex flex-col gap-4`}
        >
          <div className="flex items-center gap-2">
            {data.is_completed ? (
              <>
                <FcCalendar />
                <span>{`Completed on ${data.certified_at}`}</span>
              </>
            ) : (
              <InProgress />
            )}
          </div>

          <div className="flex items-center gap-2">
            <FcInfo /> {data.certification_type}
          </div>

          {data.is_completed && (
            <div className="flex items-center gap-2">
              <FcApproval />{' '}
              <Link href={data.certification_link}>Certification</Link>
            </div>
          )}

          <Description description={data.description} />

          {data.tech_stacks.length !== 0 && (
            <DisplayStack data={data.tech_stacks} />
          )}
        </div>
      )}
    </div>
  );
};

export default CertificationItem;
