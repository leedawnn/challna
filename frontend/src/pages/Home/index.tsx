import styled from "styled-components";

const HomePage = () => {
  return (
    <Layout>
      <NoneContentsWrapper>
        <NoneTitle> 아직 쌓인 추억이 없습니다. </NoneTitle>
        <NontSubTitle> 소중한 추억을 쌓아볼까요? </NontSubTitle>
      </NoneContentsWrapper>
    </Layout>
  );
};

export default HomePage;

const Layout = styled.main`
  padding-top: 2.4rem;

  box-sizing: border-box;
`;

const NoneContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const NoneTitle = styled.h1`
  font-family: ${({ theme }) => theme.fontStyle.bold};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};

  margin: 0;
`;

const NontSubTitle = styled.h3`
  font-family: ${({ theme }) => theme.fontStyle.regular};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.lightGray5};

  margin: 0;
`;
