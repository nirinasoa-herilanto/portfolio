'use client';

import { useEffect, useState } from 'react';

import { ICustomResponse, IProject } from '@nhr/utils';

import { fetchApi } from '@nhr/services';

import { Button, LoadingSpinner, ProjectList } from '@nhr/components';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [loadingData, setLoadingData] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [totalProject, setTotalProject] = useState<number>(0);
  const [page, setPage] = useState<number>(1);

  const loadMoreProjectsHandler = async () => {
    setPage((prevPage) => prevPage + 1);
    setIsLoading(true);

    const { data } = await fetchApi<ICustomResponse<IProject[]>>(
      `/api/projects?page=${page + 1}`
    );

    data && setProjects((prevProjects) => [...prevProjects, ...data]);

    setIsLoading(false);
  };

  const displayProjectsCard = () => {
    if (loadingData) {
      return (
        <div className="w-full h-96 flex justify-center items-center">
          <LoadingSpinner />
        </div>
      );
    }

    return <ProjectList data={projects} />;
  };

  const displayLoadMoreButton = () => {
    if (isLoading) {
      return <LoadingSpinner />;
    }

    return (
      projects.length < totalProject && (
        <Button onClick={loadMoreProjectsHandler}>More projects</Button>
      )
    );
  };

  useEffect(() => {
    (async () => {
      setLoadingData(true);
      const { data, results } = await fetchApi<ICustomResponse<IProject[]>>(
        `/api/projects`
      );

      setLoadingData(false);
      data && setProjects(data);
      results && setTotalProject(results);
    })();
  }, []);

  return (
    <section className="all-projects fit">
      <h1 className="my-8">My projects</h1>

      {displayProjectsCard()}

      <div className="my-12 flex justify-center">{displayLoadMoreButton()}</div>
    </section>
  );
}
