import { HTTP_STATUS } from "../constants/api";
import { fetchQuery } from '../utils/fetchQuery';
import { getKaKaoUser } from "../api/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSetAtom } from "jotai";
import { userStore } from "../stores/userStore";

const Redirection = () => {
  const navigate = useNavigate();
  const setUser = useSetAtom(userStore);

  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get('code');

    getKaKaoUser(fetchQuery({code}))
      .then((res) => {
        if (res.status === HTTP_STATUS.OK) {
          setUser({...res.data.kakaoLoginEntity});
          navigate('/');
        }
      })

  }, [])

  return (
    <></>
  )
};

export default Redirection;