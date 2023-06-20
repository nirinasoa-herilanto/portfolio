'use client';

import React from 'react';
import style from './Contacts.module.css';

import { FcPhoneAndroid } from 'react-icons/fc';
import { AiFillGithub, AiOutlineMail } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import ContactItem from './ContactItem';

export type ContactsProps = {
  className?: string;
  phoneNumber: string;
  email: string;
  githubName: string;
  githubLink: string;
  linkedInName: string;
  linkedInLink: string;
};

const Contacts: React.FC<ContactsProps> = ({
  className,
  phoneNumber,
  email,
  githubName,
  githubLink,
  linkedInName,
  linkedInLink,
}) => {
  return (
    <div className={`${style.contacts} ${className || ''}`}>
      <ContactItem Icon={FcPhoneAndroid} contactLabel={phoneNumber} />

      <ContactItem
        Icon={AiOutlineMail}
        contactLabel={email}
        contactLink={`mailto:${email}`}
      />

      <ContactItem
        Icon={AiFillGithub}
        contactLabel={githubName}
        contactLink={githubLink}
      />

      <ContactItem
        Icon={BsLinkedin}
        contactLabel={linkedInName}
        contactLink={linkedInLink}
      />
    </div>
  );
};

export default Contacts;
