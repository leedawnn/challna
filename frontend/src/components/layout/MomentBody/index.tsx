import { styled } from 'styled-components';
import Header from '../Header';

const MomentBody = ({ Outlet }: any) => {
  return (
    <Layout>
      <Header />
      <Outlet />
    </Layout>
  );
};

export default MomentBody;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 36rem;
  height: 100%;
  background-color: #fff;
  box-sizing: border-box;
`;
