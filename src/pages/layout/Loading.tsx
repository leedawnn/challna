import styled from 'styled-components';

const LoadingPage = () => {
  return (
    <Container>
      <Title> 잠시만 기다려주세요! </Title>
    </Container>
  );
};

export default LoadingPage;

const Container = styled.section`
  max-width: 576px;
  min-height: calc(var(--vh, 1vh) * 100);
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.white};
`;

const Title = styled.h1`
  font-size: 20px;

  margin: 0;
`;
