'use client';

import React from 'react';
import style from './Contacts.module.css';
import { IconType } from 'react-icons/lib';

import { useAppStore } from '@nhr/store';
import Link from 'next/link';

export type ContactItemProps = {
  className?: string;
  Icon: IconType;
  contactLabel: string;
  contactLink?: string;
};

/**
 * Use to display contact item, for purpose to keep it reusable
 */
const ContactItem: React.FC<ContactItemProps> = ({
  className,
  Icon,
  contactLabel,
  contactLink,
}) => {
  const {
    ui: { isDark },
  } = useAppStore();

  return (
    <div className={`${style['contact-item']} ${className || ''}`}>
      <Icon
        className={`${style['contact-item__icon']} 
        ${
          isDark
            ? style['contact-item__icon--dark']
            : style['contact-item__icon--light']
        }`}
      />{' '}
      {!contactLink ? (
        <span className="text-white dark:text-slate-950">{contactLabel}</span>
      ) : (
        <Link
          className="text-white dark:text-slate-950"
          href={`${contactLink}`}
        >
          {contactLabel}
        </Link>
      )}
    </div>
  );
};

export default ContactItem;
