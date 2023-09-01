import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import initializeMockupWorker from './mocks';
import { RouterProvider } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyles.ts';
import router from './router/index.tsx';

const root = createRoot(document.getElementById('root') as HTMLElement);

initializeMockupWorker().then(() => {
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
      <GlobalStyle />
    </StrictMode>,
  );
});
