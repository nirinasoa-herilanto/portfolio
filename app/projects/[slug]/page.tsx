import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

import { appConfig } from '@nhr/config';

import { fetchApi } from '@nhr/services';

import { ICustomResponse, IProject } from '@nhr/utils';

import { DateMarkup, DisplayStack, InProgress } from '@nhr/components';
import { FaGithub } from 'react-icons/fa';

interface IParams {
  params: { slug: string };
}

export async function generateMetadata({ params }: IParams): Promise<Metadata> {
  const { data } = await fetchApi<ICustomResponse<IProject>>({
    url: `${appConfig.apiEndpoint}/api/projects/${params.slug}`,
    nextOptions: { revalidate: 1000 * 60 * 30 }, // each 30 min
  });

  return {
    title: `${data.project_title} | Project`,
  };
}

export default async function ProjectPage({ params }: IParams) {
  const { data } = await fetchApi<ICustomResponse<IProject>>({
    url: `${appConfig.apiEndpoint}/api/projects/${params.slug}`,
    nextOptions: { revalidate: 1000 * 60 * 30 }, // each 30 min
  });

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

        <div className="project-detail flex flex-col gap-4">
          <h1 className="mb-4">{data.project_title}</h1>

          <Link className="w-32 flex items-center gap-2" href={data.repo_link}>
            <FaGithub /> {'repo link'}
          </Link>

          <DateMarkup startedAt={data?.started_at} endAt={data?.end_at} />

          {!data.is_completed && <InProgress />}

          <p className="text-justify mt-6">{data.project_description}</p>
        </div>
      </div>

      {data.tech_stacks.length !== 0 && (
        <DisplayStack className="my-14" data={data.tech_stacks} />
      )}
    </section>
  );
}
