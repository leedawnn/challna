import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import MomentBody from '../components/layout/MomentBody';
import { ROUTES_PATH } from '../constants/routes';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
};

const LayoutProvider = ({ children }: Props) => {
  const { pathname } = useLocation();

  return (
    <Layout>
      <Container>
        {pathname === ROUTES_PATH.login ? (
          children
        ) : (
          <MomentBody>
            <Header />
            {children}
            <Footer />
          </MomentBody>
        )}
      </Container>
    </Layout>
  );
};

export default LayoutProvider;

const Layout = styled.section`
  display: flex;
  flex-direction: column;

  background-color: rgb(245, 245, 245);
`;

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;
