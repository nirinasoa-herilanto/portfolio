import { NextRequest, NextResponse } from 'next/server';
import data from './data.json';

import { ICustomResponse, IFormation } from '@nhr/utils';

export async function GET(request: NextRequest) {
  const formations = NextResponse.json<ICustomResponse<IFormation[]>>({
    data,
    results: data.length,
  });

  return formations;
}
