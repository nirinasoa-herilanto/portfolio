import { NextRequest, NextResponse } from 'next/server';
import data from '../data.json';
import { ICustomResponse, IProject } from '@nhr/utils';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const searchTerm = searchParams.get('query');

  if (searchTerm) {
    const filteredProject = data.filter((project: IProject) =>
      project.project_title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return NextResponse.json<ICustomResponse<IProject[]>>({
      data: filteredProject,
      results: filteredProject.length,
    });
  }

  return NextResponse.json({ data: [] });
}
