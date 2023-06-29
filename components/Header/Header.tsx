'use client';

import React, { useRef, useEffect } from 'react';
import style from './Header.module.css';

import { DarkLightButton, Logo } from '@nhr/components';

const Header = () => {
  const headerRef = useRef() as React.MutableRefObject<HTMLElement>;

  useEffect(() => {
    function stickyHeaderHandler() {
      if (window.scrollY > 600) {
        headerRef.current?.classList.add(
          'bg-white',
          'dark:bg-slate-900',
          'shadow-md',
          'sticky',
          'top-0',
          'z-50'
        );
      } else {
        headerRef.current?.classList.remove(
          'bg-white',
          'dark:bg-slate-900',
          'shadow-md',
          'sticky',
          'top-0',
          'z-50'
        );
      }
    }

    window.addEventListener('scroll', stickyHeaderHandler);

    return () => {
      window.removeEventListener('scroll', stickyHeaderHandler);
    };
  }, [headerRef.current]);

  return (
    <header className={`${style.header} `} ref={headerRef}>
      <div className={`${style['header__nav']} fit`}>
        <Logo className={style['header__logo']} />
        <DarkLightButton className={style['header__btn']} />
      </div>
    </header>
  );
};

export default Header;
