import Header from './components/layout/Header';
import { styled } from 'styled-components';
import MomentBody from './components/layout/MomentBody';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <Layout>
      <Container>
        <MomentBody Outlet={Outlet}>
          <Header />
        </MomentBody>
      </Container>
    </Layout>
  );
}

export default App;

const Layout = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: rgb(245, 245, 245);
`;

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;
