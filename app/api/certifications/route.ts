import { NextRequest, NextResponse } from 'next/server';
import data from './data.json';

import { ICertification } from '@nhr/utils';

export async function GET(request: NextRequest) {
  const certifications = NextResponse.json<ICertification[]>(data);

  return certifications;
}
