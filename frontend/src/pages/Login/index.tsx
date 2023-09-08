import Logo from "../../components/login/Logo";
import SocialButton from "../../components/login/SocialButton";
import { styled } from "styled-components";
import useKakaoLogin from "../../hooks/useKaKaoLogin";

const LoginPage = () => {
  const { handleKakaoLogin } = useKakaoLogin();

  return (
    <Layout>
      <Container>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <SocialWrapper>
          <SocialTitle> 나만의 특별한 추억을 만들어 보세요. </SocialTitle>
          <SocialButton socialType="kakao" onClick={handleKakaoLogin}/>
        </SocialWrapper>
      </Container>
    </Layout>
  )
};

export default LoginPage;

const Layout = styled.div`
  width: 576px;
  
  position: relative;
  background: linear-gradient(0deg, #66648B 0%, #92B5D9 100%);
`;

const Container = styled.main`
  width: 100%;
  min-height: calc(var(--vh, 1vh) * 100);
`;

const LogoWrapper = styled.div`
  width: 100%;
  height: calc(var(--vh, 1vh) * 80);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialWrapper = styled.div`
  max-width: 57.6rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 30px;

  box-sizing: border-box;
`;

const SocialTitle = styled.h3`
  all: unset;

  font-size: 1.2rem;
  color: #fff;
  
  margin-bottom: 12px;
`;