import Link from 'next/link';

import { fetchApi } from '@nhr/services';

import { appConfig } from '@nhr/config';

import { ICustomResponse, IProject, ISkill } from '@nhr/utils';

import { Hero, ProjectList, SkillList } from '@nhr/components';

export default async function Homepage() {
  const { data } = await fetchApi<ICustomResponse<ISkill[]>>({
    url: `${appConfig.apiEndpoint}/api/skills`,
    nextOptions: { revalidate: 1000 * 60 * 30 }, // each 30 min
  });

  const { data: projects } = await fetchApi<ICustomResponse<IProject[]>>({
    url: `${appConfig.apiEndpoint}/api/projects`,
    nextOptions: { revalidate: 1000 * 60 * 30 },
  });

  return (
    <section className="homepage">
      <Hero />

      <div className="my-skills my-16">
        <h1 className="mb-8">My skills</h1>
        <SkillList data={data} />
      </div>

      <div className="my-projects mb-16">
        <h1 className="mb-8">My projects</h1>
        <ProjectList data={projects} />

        <div className="my-8 text-center">
          <Link href={'/projects'}>View all my projects</Link>
        </div>
      </div>
    </section>
  );
}
