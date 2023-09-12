import styled from "styled-components";

type NoneContentTypes = {
  [key in string]: {
    title: string;
    subTitle: string;
  }
};

type Props = {
  contentType: string;
}

const NONE_CONTENT: NoneContentTypes = {
  main: {
    title: "아직 쌓인 추억이 없습니다.",
    subTitle: "소중한 추억을 쌓아볼까요?"
  },
  event: {
    title: "현재 진행중인 이벤트가 없습니다.",
    subTitle: "좋은 이벤트로 찾아올게요."
  }
} as const;

const NoneContent = ({ contentType }: Props) => {
  const { title, subTitle } = NONE_CONTENT[contentType];

  return (
    <Layout>
      <Container>
        <NoneTitle> {title} </NoneTitle>
        <NoneSubTitle> {subTitle} </NoneSubTitle>
      </Container>
    </Layout>
  );
}

export default NoneContent;

const Layout = styled.section`
  box-sizing: border-box;
`;

const Container = styled.div`
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

const NoneSubTitle = styled.h3`
  font-family: ${({ theme }) => theme.fontStyle.regular};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.lightGray5};

  margin: 0;
`;