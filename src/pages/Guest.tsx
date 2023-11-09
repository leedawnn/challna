import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { HOST_USER_KEY, getHostInformation } from '../api/guest';

import GuestLogo from '../assets/images/guestMoment.png';

const GuestPage = () => {
  const params = new URL(document.location.toString()).searchParams;
  const code = params.get('host');

  const { data: hostInformation } = useQuery(HOST_USER_KEY, () => getHostInformation(code!));

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
        <ButtonWrapper>
          <ButtonText> 지금 소중한 이 순간을 공유해주세요.</ButtonText>
          <FileInputLabel htmlFor="guestFiles"> 추억 쌓아주러 가기</FileInputLabel>
          <FileInput type="file" accept="image/*" id="guestFiles" multiple max={5} />
        </ButtonWrapper>
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

const ButtonWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  position: absolute;
  left: 0;
  bottom: 20px;
`;

const ButtonText = styled.span`
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-family: ${({ theme }) => theme.typography.body1.fontFamily};
`;

const FileInputLabel = styled.label`
  all: unset;

  width: calc(100% - 48px);
  height: 50px;

  background-color: ${({ theme }) => theme.colors.point};
  color: ${({ theme }) => theme.colors.white};

  text-align: center;
  line-height: 50px;

  border-radius: 5px;

  cursor: pointer;
`;

const FileInput = styled.input`
  display: none;
`;
