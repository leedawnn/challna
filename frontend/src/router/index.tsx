import App from '../App';
import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';
import PrivateProvider from './PrivateProvider';
import PublicProvider from './PublicProvider';
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
        )
      }
    ],
  }
]);

export default router;
