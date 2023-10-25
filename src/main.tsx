import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode, Suspense } from 'react';

import { Provider } from 'jotai';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import router from './router';
import { worker } from './mocks/browser';

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

if (process.env.NODE_ENV === 'development') {
  worker.start({ onUnhandledRequest: 'bypass' });
}

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider>
        <Suspense fallback="...loading">
          <RouterProvider router={router} />
        </Suspense>
        <ReactQueryDevtools initialIsOpen />
      </Provider>
    </QueryClientProvider>
  </StrictMode>,
);
