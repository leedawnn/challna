import { Container, Layout } from '../src/pages/layout/MainLayout';

import GlobalStyle from '../src/styles/GlobalStyles';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { themeDefault } from '../src/styles/theme';

const preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={themeDefault}>
        <Layout>
          <Container>
            <GlobalStyle />
            <Story />
          </Container>
        </Layout>
      </ThemeProvider>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
