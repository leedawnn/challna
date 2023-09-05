import { styled } from 'styled-components';
import MomentBody from './components/layout/MomentBody';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <Layout>
      <Container>
        <MomentBody Outlet={Outlet}></MomentBody>
      </Container>
    </Layout>
  );
}

export default App;

const Layout = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: rgb(245, 245, 245);
`;

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;
