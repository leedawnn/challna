import styled from 'styled-components';

const EMPTY_CONTENT = {
  main: {
    title: '아직 쌓인 추억이 없습니다 :(',
    subTitle: '소중한 추억을 쌓아볼까요?',
  },
  event: {
    title: '현재 진행중인 이벤트가 없습니다.',
    subTitle: '좋은 이벤트로 찾아올게요!',
  },
} as const;

type Props = {
  contentType: keyof typeof EMPTY_CONTENT;
};

const EmptyContent = ({ contentType }: Props) => {
  const { title, subTitle } = EMPTY_CONTENT[contentType];

  return (
    <Layout>
      <Container>
        <EmptyTitle> {title} </EmptyTitle>
        <EmptySubTitle> {subTitle} </EmptySubTitle>
      </Container>
    </Layout>
  );
};

export default EmptyContent;

const Layout = styled.section`
  height: 100%;
  min-height: calc(var(--vh, 1vh) * 100 - 168px);

  display: flex;
  flex-direction: column;
  justify-content: center;

  box-sizing: border-box;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const EmptyTitle = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;

  margin: 0;
`;

const EmptySubTitle = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.lightGray5};
  font-size: 12px;

  margin: 0;
`;
