import { NextRequest, NextResponse } from 'next/server';
import data from './data.json';

import { IFormation } from '@nhr/utils';

export async function GET(request: NextRequest) {
  const formations = NextResponse.json<IFormation[]>(data);

  return formations;
}
