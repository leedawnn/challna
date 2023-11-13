import { styled } from 'styled-components';

type Props = {
  children: React.ReactNode;
};

const MomentBody = ({ children }: Props) => {
  return (
    <Layout>
      <Container>{children}</Container>
    </Layout>
  );
};

export default MomentBody;

const Layout = styled.div`
  width: 57.6rem;
  position: relative;

  background-color: ${({ theme }) => theme.colors.white};
`;

const Container = styled.main`
  width: 100%;
  max-width: 100vw;
  min-height: calc(var(--vh, 1vh) * 100);

  background-color: ${({ theme }) => theme.colors.white};
  box-sizing: border-box;
`;
