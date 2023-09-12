import App from '../App';
import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';
import TestPage from '../pages/Test';
import PrivateProvider from './PrivateProvider';
import PublicProvider from './PublicProvider';
import Redirection from './Redirection';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: (
          <PrivateProvider>
            <HomePage />
          </PrivateProvider>
        ),
      },
      {
        path: '/login',
        element: (
          <PublicProvider>
            <LoginPage />
          </PublicProvider>
        ),
      },
      {
        path: '/test',
        element: (
          <PrivateProvider>
            <TestPage />
          </PrivateProvider>
        ),
      },
    ],
  },
  {
    path: '/login/oauth2/callback/kakao',
    element: <Redirection />,
  },
]);

export default router;
