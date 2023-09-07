import { styled } from 'styled-components';

type Props = {
  children: React.ReactNode;
}

const MomentBody = ({ children }: Props) => {
  return (
    <Layout>
      <Container>
        {children}
      </Container>
    </Layout>
  );
};

export default MomentBody;

const Layout = styled.div`
  width: 576px;

  position: relative;

  background-color: #fff;
`;

const Container = styled.main`
  width: 100%;
  min-height: 100vh;

  padding-bottom: 5.7rem;
  
  background-color: #fff;
`;
