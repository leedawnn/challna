import App from '../App';
import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />
  }
]);

export default router;
