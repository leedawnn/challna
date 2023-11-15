import { createBrowserRouter } from 'react-router-dom';
import AlbumDetailPage from '../pages/AlbumDetail';
import AlbumPage from '../pages/Album';
import App from '../App';
import Auth from '../pages/Auth';
import EventPage from '../pages/Event';
import GuestEditPage from '../pages/GuestEdit';
import GuestPage from '../pages/Guest';
import GuestReviewPage from '../pages/GuestReview';
import LocalErrorBoundary from '../components/common/Errors/LocalErrorBoundary';
import LoginPage from '../pages/Login';
import MessageDetailPage from '../pages/MessageDetail';
import MessagesPage from '../pages/Messages';
import MyPage from '../pages/MyPage';
import { ROUTES_PATH } from '../constants/routes';
import { withAuth } from '../hoc/withAuth';

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
