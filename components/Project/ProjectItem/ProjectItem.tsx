import React from 'react';
import style from './ProjectItem.module.css';

import { IProject } from '@nhr/utils';

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
      <div>{data.project_title}</div>
    </div>
  );
};

export default ProjectItem;
