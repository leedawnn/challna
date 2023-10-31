import styled from 'styled-components';
import Profile from '../../components/mypage/Profile';

const MyPage = () => {
  return (
    <Layout>
      <Profile />
    </Layout>
  );
};

export default MyPage;

const Layout = styled.section`
  padding: 0 24px;

  box-sizing: border-box;
`;
