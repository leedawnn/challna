import { styled } from 'styled-components';
import MomentBody from './components/layout/MomentBody';

function App() {
  return (
    <Layout>
      <Container>
        <MomentBody />
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
