import { NextRequest, NextResponse } from 'next/server';
import data from './data.json';
import { ICustomResponse, ISkill } from '@nhr/utils';

export async function GET(request: NextRequest) {
  const skills = NextResponse.json<ICustomResponse<ISkill[]>>({
    data,
    results: data.length,
  });

  return skills;
}
