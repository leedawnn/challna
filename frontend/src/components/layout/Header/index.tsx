import { MEDIA_QUERY } from '../../../constants/styles';
import { styled } from 'styled-components';

const Header = () => {
  return (
    <Layout>
      <HeaderContainer>이것은 헤더!!@!</HeaderContainer>
    </Layout>
  );
};

export default Header;

const Layout = styled.header`
  position: sticky;
  top: 0;

  min-width: 37.5rem;
  width: 100%;
  height: 5.875rem;
  
  padding: 0 20px;
  box-sizing: border-box;

  ${MEDIA_QUERY.lg} {
    background-color: orange;
  }

  ${MEDIA_QUERY.sm} {
    background-color: royalblue;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
