import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import App from '../App';
import LocalErrorBoundary from '../components/common/ErrorBoundary/LocalErrorBoundary';
import LoginPage from '../pages/Login';
import { ROUTES_PATH } from '../constants/routes';
import { withAuth } from '../hoc/withAuth';

const Auth = lazy(() => import('../pages/Auth'));

const AlbumPage = lazy(() => import('../pages/Album'));
const AlbumDetailPage = lazy(() => import('../pages/AlbumDetail'));

const MessagesPage = lazy(() => import('../pages/Messages'));
const MessageDetailPage = lazy(() => import('../pages/MessageDetail'));

const MyPage = lazy(() => import('../pages/MyPage'));
const EventPage = lazy(() => import('../pages/Event'));

const GuestPage = lazy(() => import('../pages/Guest'));
const GuestEditPage = lazy(() => import('../pages/GuestEdit'));
const GuestReviewPage = lazy(() => import('../pages/GuestReview'));

const router = createBrowserRouter([
  {
    path: ROUTES_PATH.main,
    element: <App />,
    children: [
      {
        index: true,
        Component: withAuth(AlbumPage),
      },
      {
        path: ROUTES_PATH.albumDetail,
        Component: withAuth(AlbumDetailPage),
      },
      {
        path: ROUTES_PATH.message,
        Component: withAuth(MessagesPage),
      },
      {
        path: `${ROUTES_PATH.messageDetail}/:id`,
        Component: withAuth(MessageDetailPage),
      },
      {
        path: ROUTES_PATH.mypage,
        Component: withAuth(MyPage),
      },
      {
        path: ROUTES_PATH.event,
        Component: withAuth(EventPage),
      },
      {
        path: ROUTES_PATH.login,
        element: <LoginPage />,
      },
      {
        path: ROUTES_PATH.guest,
        children: [
          {
            index: true,
            element: (
              <LocalErrorBoundary>
                <GuestPage />
              </LocalErrorBoundary>
            ),
          },
          {
            path: ROUTES_PATH.guestEdit,
            element: <GuestEditPage />,
          },
          {
            path: ROUTES_PATH.guestReview,
            element: <GuestReviewPage />,
          },
        ],
      },
    ],
  },
  {
    path: ROUTES_PATH.redirect,
    element: <Auth />,
  },
]);

export default router;
