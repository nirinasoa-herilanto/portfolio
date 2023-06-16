import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

import { appConfig } from '@nhr/config';

import { fetchApi } from '@nhr/services';

import { ICustomResponse, IProject } from '@nhr/utils';

interface IParams {
  params: { slug: string };
}

export async function generateMetadata({ params }: IParams): Promise<Metadata> {
  const { data } = await fetchApi<ICustomResponse<IProject>>(
    `${appConfig.apiEndpoint}/api/projects/${params.slug}`
  );

  return {
    title: `${data.project_title} | Project`,
  };
}

export default async function ProjectPage({ params }: IParams) {
  const { data } = await fetchApi<ICustomResponse<IProject>>(
    `${appConfig.apiEndpoint}/api/projects/${params.slug}`
  );

  return (
    <section className="project">
      <div className="project-hero mt-8  grid lg:grid-cols-2 gap-4">
        <div className="project-image w-full h-auto overflow-hidden">
          <Image
            src={data.project_image!}
            alt={data.project_title}
            width={500}
            height={500}
            sizes="cover"
          />
        </div>

        <div className="project-detail">
          <h1 className="mb-4">{data.project_title}</h1>
          <Link href={data.repo_link}>repo link</Link>
          <p className="text-justify mt-6">{data.project_description}</p>
        </div>
      </div>

      <div className="my-8">
        <h1 className="my-4">Tech-stacks:</h1>
        <ul className="flex flex-wrap gap-4">
          {data.tech_stacks.map((stack) => (
            <li
              className="p-4  bg-blue-200 rounded-lg shadow-lg dark:text-slate-950"
              key={stack}
            >
              {stack}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
