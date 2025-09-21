// Header.helper.ts
import type { SxProps, Theme } from '@mui/material';
import type { SystemStyleObject } from '@mui/system';
import { navLinkBaseStyles, navLinkActiveStyles } from './ui/Header.style';

const resolveSx = (
  styles: SxProps<Theme>,
  theme: Theme,
): SystemStyleObject<Theme> => {
  if (!styles) {
    return {};
  }

  if (Array.isArray(styles)) {
    return styles.reduce<SystemStyleObject<Theme>>(
      (acc, style) => ({ ...acc, ...resolveSx(style as SxProps<Theme>, theme) }),
      {},
    );
  }

  if (typeof styles === 'function') {
    return resolveSx(styles(theme), theme);
  }

  return styles as SystemStyleObject<Theme>;
};

export const getNavLinkStyles = (isActive: boolean): SxProps<Theme> => (theme) => ({
  ...resolveSx(navLinkBaseStyles, theme),
  ...(isActive ? resolveSx(navLinkActiveStyles, theme) : {}),
});
