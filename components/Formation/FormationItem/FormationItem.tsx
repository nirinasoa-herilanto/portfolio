'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import style from './FormationItem.module.css';

import { IFormation } from '@nhr/utils';

import { FaPlus, FaMinus } from 'react-icons/fa';
import { FcCalendar, FcDiploma2, FcDocument, FcInfo } from 'react-icons/fc';

export type FormationItemProps = {
  className?: string;
  data: IFormation;
};

/**
 * Use to display a formation item
 */
const FormationItem: React.FC<FormationItemProps> = ({ className, data }) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const displayDetailHandler = () => setShowDetails((prevState) => !prevState);

  return (
    <div className={`${style['formation-item']} ${className || ''}`}>
      <div className={`${style['formation-item__header']}`}>
        <span className="text-blue-500 dark:text-white">
          {data.formation_name}
        </span>

        {showDetails ? (
          <FaMinus
            className={style['formation-item__icon']}
            onClick={displayDetailHandler}
          />
        ) : (
          <FaPlus
            className={style['formation-item__icon']}
            onClick={displayDetailHandler}
          />
        )}
      </div>

      {showDetails && (
        <div
          className={`${style['formation-item__content']} mt-4 flex flex-col gap-4`}
        >
          <div className="flex items-center gap-2">
            <FcCalendar />
            <span>{`${data.started_at} - ${data.end_at}`}</span>
          </div>

          <div className="flex items-center gap-2">
            <FcInfo /> {data.formation_type}
          </div>

          {data.is_completed && data.reward_link && (
            <div className="flex items-center gap-2">
              <FcDiploma2 /> <Link href={data.reward_link}>Diploma</Link>
            </div>
          )}

          <div className="formation-description">
            <div className="mb-4 flex items-center gap-2">
              <FcDocument /> {'Description:'}
            </div>

            <p>{data.description || '---'}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormationItem;
