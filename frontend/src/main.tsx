import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import initializeMockupWorker from './mocks';
import { RouterProvider } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyles.ts';
import router from './router/index.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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
        <GlobalStyle />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>,
  );
});
