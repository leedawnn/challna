import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Provider } from 'jotai';
import { RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import GlobalStyle from './styles/GlobalStyles';
import initializeMockupWorker from './mocks';
import router from './router';

const root = createRoot(document.getElementById('root') as HTMLElement);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      suspense: true,
      useErrorBoundary: true,
    },
  },
});

initializeMockupWorker().then(() => {
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <Provider>
          <GlobalStyle />
          <RouterProvider router={router} />
        </Provider>
      </QueryClientProvider>
    </StrictMode>,
  );
});
