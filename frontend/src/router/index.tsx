import App from '../App';
import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';
import TestPage from '../pages/Test';
import PrivateProvider from './PrivateProvider';
import PublicProvider from './PublicProvider';
import { ROUTES_PATH } from '../constants/routes';
import Redirection from './Redirection';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: ROUTES_PATH.main,
        element: (
          <PrivateProvider>
            <HomePage />
          </PrivateProvider>
        ),
      },
      {
        path: ROUTES_PATH.login,
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
    path: ROUTES_PATH.redirect,
    element: <Redirection />,
  },
]);

export default router;
