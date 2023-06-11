import { NextRequest, NextResponse } from 'next/server';
import data from './data.json';
import { ISkill } from '@nhr/utils';

export async function GET(request: NextRequest) {
  const skills = NextResponse.json<ISkill[]>(data);

  return skills;
}
