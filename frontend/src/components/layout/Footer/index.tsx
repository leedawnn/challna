import { styled } from 'styled-components';

const Footer = () => {
  const FOOTER_ICONS = []; // 추후 메뉴 아이콘 이미지 배열
  const FOOTER_ITEMS = ['아이콘', '아이콘', '아이콘'];

  return (
    <Layout>
      <Container>
        <MenuWrapper>
          {FOOTER_ITEMS.map((item: string) => (
            <MenuItem>
              <MenuIcon />
              <MenuName>{item}</MenuName>
            </MenuItem>
          ))}
        </MenuWrapper>
      </Container>
    </Layout>
  );
};

export default Footer;

const Layout = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;

  max-width: 57.6rem;
  width: 100%;
  height: 10rem;

  background-color: #fff;

  position: fixed;
  bottom: 0px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 4.8rem;
`;

const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const MenuIcon = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: #d9d9d9;
  margin-bottom: 1rem;
`;

const MenuName = styled.span`
  color: #d9d9d9;
  font-size: 1.4rem;
`;
