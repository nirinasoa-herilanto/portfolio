'use client';

import React from 'react';
import { ThemeProvider } from 'next-themes';

/**
 * Dark and light theme wrapper
 */
const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default ThemeWrapper;