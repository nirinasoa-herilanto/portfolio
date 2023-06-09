import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export interface IAppUI {
  isDark: boolean;
  switchThemeHandler: () => void;
}

/**
 * Use to handle all about UI on the entiere application
 */
const useAppUI = () => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  const switchThemeHandler = () =>
    setTheme(theme === 'dark' ? 'light' : 'dark');

  useEffect(() => {
    theme === 'dark' ? setIsDark(false) : setIsDark(true);
  }, [isDark, theme]);

  return { isDark, switchThemeHandler } as IAppUI;
};

export default useAppUI;
