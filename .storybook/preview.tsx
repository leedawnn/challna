import React from 'react';
import { themeDefault } from '../src/styles/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/styles/GlobalStyles';
import { Layout, Container } from '../src/components/layout/MomentBody/index';

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
