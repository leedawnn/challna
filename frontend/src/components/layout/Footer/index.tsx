import { FOOTER_MENUS } from '../../../constants/styles';
import { styled } from 'styled-components';

const Footer = () => {
  return (
    <Layout>
      <Container>
        <MenuWrapper>
          {FOOTER_MENUS.map((items) => (
            <MenuItem key={items.id}>
              <MenuIcon src={items.icon} alt={`${items.name} 이미지`} />
              <MenuName>{items.name}</MenuName>
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
  height: 6.6rem;

  background-color: #fff;
  border-top: 1px solid ${(props) => props.theme.colors.lightGray2};

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
  padding: 1rem 0 1.5rem;
`;

const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const MenuIcon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  color: ${(props) => props.theme.colors.lightGray4};
  margin-bottom: 1rem;
`;

const MenuName = styled.span`
  color: ${(props) => props.theme.colors.lightGray4};
  font-family: ${(props) => props.theme.typography.body1.fontFamily};
  font-size: ${(props) => props.theme.typography.body1.fontSize};
  line-height: ${(props) => props.theme.typography.body1.lineHeight};
`;
