'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import style from './FormationItem.module.css';

import { IFormation } from '@nhr/utils';

import { FaPlus, FaMinus } from 'react-icons/fa';
import { FcDiploma2, FcDocument, FcInfo } from 'react-icons/fc';
import { DateMarkup, Description, DisplayStack } from '@nhr/components';

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
          <DateMarkup startedAt={data.started_at} endAt={data.end_at} />

          <div className="flex items-center gap-2">
            <FcInfo /> {data.formation_type}
          </div>

          {data.is_completed && data.reward_link && (
            <div className="flex items-center gap-2">
              <FcDiploma2 /> <Link href={data.reward_link}>Diploma</Link>
            </div>
          )}

          <div className="formation-detail">
            <Description description={data.description} />

            {data.tech_stacks.length !== 0 && (
              <DisplayStack data={data.tech_stacks} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FormationItem;
