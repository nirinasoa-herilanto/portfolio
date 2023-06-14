import React from 'react';
import style from './Footer.module.css';
import { footerWording } from './footer.wording';

export type FooterProps = {
  className?: string;
};

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={`${style.footer} ${className || ''}`}>
      <div>{footerWording.sumUp}</div>
      <div>Phone: {footerWording.phoneNumber}</div>
      <div>Email: {footerWording.email}</div>
      <div>Github: {footerWording.githubName}</div>
      <div>LinkedIn: {footerWording.linkedinName}</div>
    </footer>
  );
};

export default Footer;
