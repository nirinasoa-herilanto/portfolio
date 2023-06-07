'use client';

import React from 'react';
import useAppUI, { IAppUI } from './ui/ui.store';

export interface IAppStore {
  ui: IAppUI;
}

export const AppStoreContext = React.createContext({} as IAppStore);

export const AppStoreProvider = React.memo(
  ({ children, ...rest }: { children: React.ReactNode }) => {
    const ui = useAppUI();

    const context = { ...rest, ui } as IAppStore;

    return (
      <AppStoreContext.Provider value={context}>
        {children}
      </AppStoreContext.Provider>
    );
  }
);

export const useAppStore = () => React.useContext(AppStoreContext);
