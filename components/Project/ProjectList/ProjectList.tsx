import React from 'react';
import style from './ProjectList.module.css';
import { IProject } from '@nhr/utils';
import ProjectItem from '../ProjectItem/ProjectItem';

export type ProjectListProps = {
  className?: string;
  data: IProject[];
};

/**
 * Use to display a list of project
 */
const ProjectList: React.FC<ProjectListProps> = ({ className, data }) => {
  return (
    <ul className={`${style['project-list']} ${className || ''}`}>
      {data.map((project) => (
        <li key={project._id}>
          <ProjectItem data={project} />
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
