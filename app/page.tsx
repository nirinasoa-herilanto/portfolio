import { fetchApi } from '@nhr/services';

import { appConfig } from '@nhr/config';

import { ICustomResponse, IProject, ISkill } from '@nhr/utils';

import { Hero, ProjectList, SkillList } from '@nhr/components';

export default async function Homepage() {
  const { data } = await fetchApi<ICustomResponse<ISkill[]>>(
    `${appConfig.apiEndpoint}/api/skills`
  );

  const { data: projects } = await fetchApi<ICustomResponse<IProject[]>>(
    `${appConfig.apiEndpoint}/api/projects`
  );

  return (
    <section className="homepage">
      <Hero />

      <div className="my-skills mb-12">
        <h1 className="mb-8">My skills</h1>
        <SkillList data={data} />
      </div>

      <div className="my-projects mb-12">
        <h1 className="mb-8">My projects</h1>
        <ProjectList data={projects} />
      </div>
    </section>
  );
}
