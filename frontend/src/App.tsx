import { Outlet } from 'react-router-dom';
import { setScreenSize } from './utils/styles';
import { styled } from 'styled-components';

function App() {

  window.addEventListener('resize', () => setScreenSize());

  return (
    <Layout>
      <Container>
        <Outlet />
      </Container>
    </Layout>
  );
}

export default App;

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
