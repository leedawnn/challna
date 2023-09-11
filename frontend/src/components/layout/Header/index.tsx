import { styled } from 'styled-components';
import backButton from '../../../assets/back.svg';
import moreButton from '../../../assets/more.svg';

const Header = () => {
  return (
    <Layout>
      <HeaderContainer>
        <MenuItem src={backButton} alt="뒤로가기 버튼" />
        <MenuItem src={moreButton} alt="더보기 버튼" />
      </HeaderContainer>
    </Layout>
  );
};

export default Header;

const Layout = styled.header`
  position: sticky;
  top: 0;

  width: inherit;
  height: 6rem;

  background-color: #fff;

  padding: 5rem 2rem 2rem;
  box-sizing: border-box;
  margin: 0 auto;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MenuItem = styled.img`
  cursor: pointer;
`;
