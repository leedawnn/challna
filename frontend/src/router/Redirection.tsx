import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Redirection = () => {
  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get('code');

    console.log(code);
    
  }, [])

  return (
    <div> 로그인 중입니다. </div>
  )
};

export default Redirection;