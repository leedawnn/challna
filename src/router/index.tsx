import { createBrowserRouter } from 'react-router-dom';
import AlbumDetailPage from '../pages/AlbumDetail';
import App from '../App';
import AuthRedirection from '../pages/AuthRedirection';
import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';
import { ROUTES_PATH } from '../constants/routes';
import TestPage from '../pages/Test';
import { withAuth } from '../hoc/withAuth';
import Messages from '../pages/Messages';

const router = createBrowserRouter([
  {
    path: ROUTES_PATH.main,
    element: <App />,
    children: [
      {
        index: true,
        Component: withAuth(HomePage),
      },
      {
        path: ROUTES_PATH.albumDetail,
        Component: withAuth(AlbumDetailPage),
      },
      {
        path: ROUTES_PATH.message,
        Component: withAuth(Messages),
      },
      {
        path: ROUTES_PATH.login,
        element: <LoginPage />,
      },
      {
        path: '/test',
        element: <TestPage />,
      },
    ],
  },
  {
    path: ROUTES_PATH.redirect,
    element: <AuthRedirection />,
  },
]);

export default router;
