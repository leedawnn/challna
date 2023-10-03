import { useAtomValue } from 'jotai';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { accessTokenStore } from '../stores/accessToken';

// 추후 React.ComponentType을 명확하게 명시해줘야함
export const withAuth = (WrappedComponent: React.ComponentType) => (props: any) => {
  const accessToken = useAtomValue(accessTokenStore);
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate('/login');
    }
  }, [accessToken]);

  return <WrappedComponent {...props} />;
};
