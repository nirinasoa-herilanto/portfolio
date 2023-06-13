import { NextResponse } from 'next/server';
import data from '../data.json';

import { IProject } from '@nhr/utils';

interface IParams {
  params: { slug: string };
}

export async function GET(request: Request, { params }: IParams) {
  const filteredProject = data.find((project) => project.slug === params.slug);

  if (!filteredProject) {
    return NextResponse.json({ data: null });
  }

  const result = NextResponse.json<{ data: IProject }>({
    data: filteredProject,
  });

  return result;
}
