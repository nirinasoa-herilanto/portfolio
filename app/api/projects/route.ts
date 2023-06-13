import { NextRequest, NextResponse } from 'next/server';
import data from './data.json';

import { ICustomResponse, IProject } from '@nhr/utils';

import { appConfig } from '@nhr/config';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page');

  let projects = NextResponse.json<ICustomResponse<IProject[]>>({
    data: data.slice(0, +appConfig.paginationPerPage),
    results: data.length,
  });

  if (page) {
    const start = (+page - 1) * +appConfig.paginationPerPage;
    const end = +page * +appConfig.paginationPerPage;

    const paginatedData = data.slice(start, end);

    projects = NextResponse.json<ICustomResponse<IProject[]>>({
      data: paginatedData,
      results: data.length,
    });
  }

  return projects;
}
