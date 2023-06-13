import React from 'react';

export const metadata = {
  title: 'About me',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <React.Fragment>{children}</React.Fragment>;
}
