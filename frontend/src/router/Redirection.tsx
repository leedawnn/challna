import { HTTP_STATUS } from '../constants/api';
import { fetchQuery } from '../utils/fetchQuery';
import { getKaKaoUser } from '../api/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetAtom } from 'jotai';
import { userStore } from '../stores/userStore';
import { atomWithStorage } from 'jotai/utils';

const Redirection = () => {
  const navigate = useNavigate();
  const setUser = useSetAtom(userStore);

  const accessTokenAtom = atomWithStorage('ACCESS_TOKEN', '');
  const setAccessToken = useSetAtom(accessTokenAtom);

  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get('code');

    getKaKaoUser(fetchQuery({ code })).then((res) => {
      console.log('rrreeessss', res);
      if (res.status === HTTP_STATUS.OK) {
        setUser({ ...res.data.kakaoLoginEntity });
        setAccessToken('access_token'); // 임의의 엑세스 토큰 저장
        navigate('/');
      }
    });
  }, []);

  return <></>;
};

export default Redirection;
