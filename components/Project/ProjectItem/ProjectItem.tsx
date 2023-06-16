import React from 'react';
import style from './ProjectItem.module.css';

import { IProject, truncate } from '@nhr/utils';

import Image from 'next/image';
import Link from 'next/link';

export type ProjectItemProps = {
  className?: string;
  data: IProject;
};

/**
 * Use to display a project item
 */
const ProjectItem: React.FC<ProjectItemProps> = ({ className, data }) => {
  return (
    <div className={`${style['project-item']} ${className || ''}`}>
      <div className={style['project-item__image']}>
        <Image
          src={data.project_image!}
          alt={data.project_title}
          width={500}
          height={500}
          sizes="cover"
        />
      </div>
      <div className={style['project-item__title']}>{data.project_title}</div>

      <p className="my-4 text-slate-950 dark:text-slate-900">
        {truncate(data.project_description, 52)}
      </p>

      <Link
        className="text-blue-600 dark:text-blue-800"
        href={`/projects/${data.slug}`}
      >
        more details
      </Link>
    </div>
  );
};

export default ProjectItem;
