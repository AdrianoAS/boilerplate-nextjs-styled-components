import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../src/styles/globalStyles';
import theme from '../src/styles/theme';

export const withTheme = (Story) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  );
};
