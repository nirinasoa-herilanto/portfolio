import React from 'react';
import style from './Header.module.css';

import { DarkLightButton, Logo } from '@nhr/components';

const Header = () => {
  return (
    <header className={`${style.header}`}>
      <div className={`${style['header__nav']} fit`}>
        <Logo className={style['header__logo']} />
        <DarkLightButton className={style['header__btn']} />
      </div>
    </header>
  );
};

export default Header;
