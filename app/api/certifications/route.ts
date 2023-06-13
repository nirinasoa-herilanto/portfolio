import { NextRequest, NextResponse } from 'next/server';
import data from './data.json';

import { ICertification, ICustomResponse } from '@nhr/utils';

export async function GET(request: NextRequest) {
  const certifications = NextResponse.json<ICustomResponse<ICertification[]>>({
    data,
    results: data.length,
  });

  return certifications;
}
