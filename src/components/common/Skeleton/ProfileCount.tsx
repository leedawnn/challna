import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  0% {
    transform: translateX(-50%);
  }
  50% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const ProfileCount = () => {
  return (
    <>
      <Container>
        <CountText />
        <CountTitleText> 메시지 </CountTitleText>
      </Container>
      <Container>
        <CountText />
        <CountTitleText> 이미지 </CountTitleText>
      </Container>
    </>
  );
};

export default ProfileCount;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;

  box-sizing: border-box;
`;

const CountText = styled.div`
  width: 15px;
  height: 15px;

  background: linear-gradient(90deg, #f5f5f5 0%, #ffffffae 30%, #f5f5f5 60%);
  animation: ${loading} 1.5s infinite linear;
`;

const CountTitleText = styled.span`
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-family: ${({ theme }) => theme.typography.body1.fontFamily};
`;
