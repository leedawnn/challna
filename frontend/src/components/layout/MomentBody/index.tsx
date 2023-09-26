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

export const Layout = styled.div`
  width: 57.6rem;
  position: relative;

  background-color: #fff;
`;

export const Container = styled.main`
  width: 100%;
  min-height: calc(var(--vh, 1vh) * 100);

  padding-bottom: 8.6rem;

  background-color: #fff;
`;
