import { useEffect, useState } from "react";

interface ReturnResult {
  isKaKaoInit: boolean;
  handleLogin: () => void;
}

type UseKakaoLogin = () => ReturnResult;

const useKakaoLogin: UseKakaoLogin = () => {
  const [isKaKaoInit, setIsKaKaoInit] = useState<boolean>(false);
  const kakao = (window as any).Kakao;

  useEffect(() => {
    if (kakao && !kakao.isInitialized()) {
      kakao.init(import.meta.env.VITE_JAVASCRIPT_KEY);
      setIsKaKaoInit(kakao.isInitialized());
    }
  }, [])

  const handleLogin = () => {
    kakao.Auth.authorize({
      redirectUri: import.meta.env.VITE_REDIRECT_URL,
    });
  }


  return {
    isKaKaoInit,
    handleLogin,
  }
};

export default useKakaoLogin;