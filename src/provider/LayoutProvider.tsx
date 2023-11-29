import { Suspense } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import Footer from '../components/common/Footer/Footer';
import Header from '../components/common/Header/Header';
import LoadingPage from '../pages/layout/Loading';
import MainLayout from '../pages/layout/MainLayout';
import { ROUTES_PATH } from '../constants/routes';

type Props = {
  children: React.ReactNode;
};

const LayoutProvider = ({ children }: Props) => {
  const { pathname } = useLocation();

  return (
    <Layout>
      <Container>
        {pathname === ROUTES_PATH.login || pathname.includes(ROUTES_PATH.guest) ? (
          children
        ) : (
          <Suspense fallback={<LoadingPage />}>
            <MainLayout>
              <Header />
              {children}
              <Footer />
            </MainLayout>
          </Suspense>
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

  box-sizing: border-box;
`;

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
`;
