'use client';

import { useServerInsertedHTML } from 'next/navigation';
import React, { useState } from 'react';

import GlobalStyles from '@/styles/globalStyles';
import theme from '@/styles/theme';
import {
  ServerStyleSheet,
  StyleSheetManager,
  ThemeProvider
} from 'styled-components';

export default function StyledComponentsRegistry({
  children
}: {
  children: React.ReactNode;
}) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== 'undefined') return <>{children}</>;

  return (
    <ThemeProvider theme={theme}>
      <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
        <GlobalStyles />
        {children}
      </StyleSheetManager>
    </ThemeProvider>
  );
}
