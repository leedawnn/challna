import { atomWithStorage } from 'jotai/utils';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetAtom } from 'jotai';
import { HTTP_STATUS } from '../../constants/api';
import { accessTokenStore } from '../../stores/accessToken';
import { fetchQuery } from '../../utils/fetchQuery';
import { getKaKaoUser } from '../../api/auth';
import { userStore } from '../../stores/userStore';

const AuthRedirection = () => {
  const navigate = useNavigate();
  const setUser = useSetAtom(userStore);
  const setAccessToken = useSetAtom(accessTokenStore);

  const refreshTokenAtom = atomWithStorage('REFRESH_TOKEN', '');
  const setRefreshToken = useSetAtom(refreshTokenAtom);

  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get('code');

    getKaKaoUser(fetchQuery({ code })).then((res) => {
      if (res.status === HTTP_STATUS.OK) {
        setUser({ ...res.data });
        setAccessToken(res.data.accessToken);
        setRefreshToken(res.data.refreshToken);
        navigate('/');
      }
    });
  }, []);

  return null;
};

export default AuthRedirection;
