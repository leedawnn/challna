import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Redirection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get('code');

    axios.get(`http://3.37.235.110/login?code=${code}`).then((res) => {
      if (res.status === 200) {
        navigate('/');
      }
    });
    
  }, [])

  return (
    <></>
  )
};

export default Redirection;