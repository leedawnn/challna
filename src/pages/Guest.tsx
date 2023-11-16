import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { useSetAtom } from 'jotai';
import { HOST_USER_KEY, getHostInformation } from '../api/guest';

import GuestIntroUpload from '../components/guest/GuestIntroUpload/GuestIntroUpload';
import GuestLogo from '../assets/images/guestMoment.png';
import { guestAuthStore } from '../stores/guestStore';

const GuestPage = () => {
  const setGuestAuth = useSetAtom(guestAuthStore);
  const params = new URL(document.location.toString()).searchParams;
  const code = params.get('host');

  const { data: hostInformation } = useQuery(HOST_USER_KEY, () => getHostInformation(code!), {
    onSuccess: (res) => {
      setGuestAuth(res.data);
    },
  });

  return (
    <Layout>
      <Container>
        <Logo src={GuestLogo} alt="moment_logo" />
        <WelcomeWrapper>
          <UserImage src={hostInformation?.data?.profile_image} alt={`${hostInformation?.data?.kakaoName}_profile`} />
          <TitleWrapper>
            <WelcomeTitle> {hostInformation?.data?.kakaoName}님의 </WelcomeTitle>
            <WelcomeTitle> 추억 앨범에 초대되셨습니다! </WelcomeTitle>
          </TitleWrapper>
        </WelcomeWrapper>
        <GuestIntroUpload />
      </Container>
    </Layout>
  );
};

export default GuestPage;

const Layout = styled.div`
  width: 576px;

  background-color: ${({ theme }) => theme.colors.white};
`;

const Container = styled.main`
  width: 100%;
  min-height: calc(var(--vh, 1vh) * 100);

  position: relative;

  padding: 20px 24px;
  box-sizing: border-box;
`;

const Logo = styled.img`
  max-width: 120px;

  position: absolute;
  top: 20px;
  left: 24px;
`;

const WelcomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const UserImage = styled.img`
  width: 206px;
  height: 206px;

  border-radius: 50%;

  object-fit: cover;
`;

const TitleWrapper = styled.div`
  max-width: 197px;

  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const WelcomeTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.subHead3.fontSize};
  font-family: ${({ theme }) => theme.typography.subHead3.fontFamily};
  text-align: center;

  margin: 0;
`;
