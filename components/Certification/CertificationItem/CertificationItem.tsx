'use client';

import React, { useState } from 'react';
import style from './CertificationItem.module.css';

import { ICertification } from '@nhr/utils';

import { FcCalendar, FcDocument, FcInfo, FcSettings } from 'react-icons/fc';
import { FaCode, FaMinus, FaPlus } from 'react-icons/fa';

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
              <div className="p-2 text-slate-950 flex items-center gap-2 bg-yellow-500">
                <FcSettings />
                {' In progress'}
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <FcInfo /> {data.certification_type}
          </div>

          <div className="certification-description">
            <div className="mb-4 flex items-center gap-2">
              <FcDocument /> {'Description:'}
            </div>

            <p>{data.description}</p>
          </div>

          <div className="tech-stack">
            <div className="mb-4 flex items-center gap-2">
              <FaCode /> {'Stacks:'}
            </div>

            <ul className="flex gap-2">
              {data.tech_stacks.map((stack) => (
                <li className="p-2 dark:text-slate-950 bg-blue-200" key={stack}>
                  {stack}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificationItem;
