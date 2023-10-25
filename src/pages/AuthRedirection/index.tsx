import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetAtom } from 'jotai';
import { HTTP_STATUS } from '../../constants/api';
import { fetchQuery } from '../../utils/fetchQuery';
import { getKaKaoUser } from '../../api/auth';
import { userStore } from '../../stores/userStore';

const AuthRedirection = () => {
  const navigate = useNavigate();
  const setUser = useSetAtom(userStore);

  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get('code');

    getKaKaoUser(fetchQuery({ code })).then((res) => {
      if (res.status === HTTP_STATUS.OK) {
        setUser({ ...res.data });
        navigate('/');
      }
    });
  }, []);

  return null;
};

export default AuthRedirection;
