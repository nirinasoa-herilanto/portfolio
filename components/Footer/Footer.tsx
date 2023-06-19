import React from 'react';
import style from './Footer.module.css';

import { footerWording } from './footer.wording';

import FitWrapper from '../FitWrapper/FitWrapper';
import Contacts from '../Contacts/Contacts';

export type FooterProps = {
  className?: string;
};

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer
      className={`${style.footer} bg-slate-950 dark:bg-slate-50
       ${className || ''}`}
    >
      <FitWrapper className={`${style['footer__wrapper']}`}>
        <div className="footer__sumup">
          <span className="text-white dark:text-slate-950">
            {footerWording.sumUp}
          </span>
        </div>

        <Contacts
          phoneNumber={footerWording.phoneNumber}
          email={footerWording.email}
          githubName={footerWording.githubName}
          githubLink={footerWording.githubLink}
          linkedInName={footerWording.linkedinName}
          linkedInLink={footerWording.linkedinLink}
        />
      </FitWrapper>

      <div className="pt-16 text-white text-right dark:text-slate-950 fit">{`Nhr ${new Date().getFullYear()}`}</div>
    </footer>
  );
};

export default Footer;
