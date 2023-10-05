import { useEffect, useState } from 'react';

interface ReturnResult {
  isKaKaoInit: boolean;
  handleKakaoLogin: () => void;
}

type UseKakaoLogin = () => ReturnResult;

const useKakaoLogin: UseKakaoLogin = () => {
  const [isKaKaoInit, setIsKaKaoInit] = useState<boolean>(false);
  const kakao = (window as any).Kakao;

  useEffect(() => {
    if (kakao) {
      try {
        if (!kakao.isInitialized()) {
          kakao.init(import.meta.env.VITE_JAVASCRIPT_KEY);
        }
        setIsKaKaoInit(true);
      } catch (error) {
        // 추후 이 부분에 대해서 throw Error를 통해 ErrorBoundary에서 통제할 수 있도록 수정 필요
        console.error('Failed to initialize Kakao SDK:', error);
        setIsKaKaoInit(false);
      }
    }
  }, []);

  const handleKakaoLogin = () => {
    kakao.Auth.authorize({
      redirectUri: `${import.meta.env.VITE_BASE_URL}/login/oauth2/callback/kakao`,
    });
  };

  return {
    isKaKaoInit,
    handleKakaoLogin,
  };
};

export default useKakaoLogin;
