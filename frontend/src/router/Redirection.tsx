import axios from "axios";
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

    axios.get(`http://3.37.235.110/login?code=${code}&text=111`).then((res) => {
      if (res.status === 200) {
        setUser({...res.data.kakaoLoginEntity});
        navigate('/');
      }
    });
    
  }, [])

  return (
    <></>
  )
};

export default Redirection;