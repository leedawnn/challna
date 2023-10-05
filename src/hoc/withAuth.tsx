import { Navigate } from 'react-router-dom';
import { useAtomValue } from 'jotai';
import { ROUTES_PATH } from '../constants/routes';
import { accessTokenStore } from '../stores/accessToken';

// 추후 제네릭으로 선언한 부분에 props로 넘겨주는 값이 있을 경우, 추가 선언 필요

export const withAuth = (Component: React.ComponentType) =>
  function WithAuthentication<P extends {}>(props: P) {
    const accessToken = useAtomValue(accessTokenStore);

    if (!accessToken) return <Navigate to={ROUTES_PATH.login} />;

    return <Component {...props} />;
  };
