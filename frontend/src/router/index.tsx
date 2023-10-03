import AlbumDetailPage from '../pages/AlbumDetail';
import App from '../App';
import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';
import PrivateProvider from './PrivateProvider';
import PublicProvider from './PublicProvider';
import { ROUTES_PATH } from '../constants/routes';
import Redirection from './Redirection';
import TestPage from '../pages/Test';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: ROUTES_PATH.main,
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <PrivateProvider>
            <HomePage />
          </PrivateProvider>
        ),
      },
      {
        path: ROUTES_PATH.albumDetail,
        element: (
          <PrivateProvider>
            <AlbumDetailPage />
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
