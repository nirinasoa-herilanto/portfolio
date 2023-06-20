import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My projects',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <React.Fragment>{children}</React.Fragment>;
}
