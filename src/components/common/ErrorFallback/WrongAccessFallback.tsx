import styled from 'styled-components';

const WrongAccessFallback = () => {
  return (
    <Layout>
      <Container>
        <TitleWrapper>
          <Title> 잘못된 접근입니다. </Title>
          <Text> 참여하고자 하는 QR 코드 및 링크를 다시 한 번 확인해주세요. </Text>
        </TitleWrapper>
      </Container>
    </Layout>
  );
};

export default WrongAccessFallback;

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

const TitleWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.headline.fontSize};
  font-family: ${({ theme }) => theme.typography.headline.fontFamily};
`;

const Text = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray1};
  text-align: center;
`;
