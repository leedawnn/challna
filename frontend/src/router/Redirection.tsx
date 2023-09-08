import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Redirection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get('code');

    const data = {
      code,
    }

    axios.post('/login/kakao', data).then((res) => {
      if (res.status === 200) {
        navigate('/');
      }
    });
    
  }, [])

  return (
    <div> 로그인 중입니다. </div>
  )
};

export default Redirection;