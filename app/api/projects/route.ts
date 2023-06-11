import { NextRequest, NextResponse } from 'next/server';
import data from './data.json';
import { IProject } from '@nhr/utils';

export async function GET(request: NextRequest) {
  const projects = NextResponse.json<IProject[]>(data);

  return projects;
}
