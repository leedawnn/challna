import { FOOTER_MENUS } from '../../../constants/styles';
import { styled } from 'styled-components';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <Layout>
      <Container>
        <MenuWrapper>
          {FOOTER_MENUS.map((items) => (
            <MenuItem key={items.id}>
              <items.icon active={pathname === items.path} />
              <MenuName current={pathname === items.path}>{items.name}</MenuName>
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
  padding: 1rem 0;
`;

const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;

  cursor: pointer;

  & > svg {
    height: 24px;
  }
`;

const MenuName = styled.span<{ current: boolean }>`
  color: ${(props) => (props.current ? props.theme.colors.point : props.theme.colors.lightGray4)};
  font-family: ${(props) => props.theme.typography.body1.fontFamily};
  font-size: ${(props) => props.theme.typography.body1.fontSize};
  line-height: ${(props) => props.theme.typography.body1.lineHeight};
`;
