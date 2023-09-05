import { styled } from 'styled-components';

const MomentBody = ({ Outlet }: any) => {
  return (
    <Layout>
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
  width: 576px;
  max-width: 45rem;
  height: 100vh;
  background-color: #fff;
  box-sizing: border-box;
`;
