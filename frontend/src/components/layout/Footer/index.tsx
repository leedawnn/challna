import { FOOTER_MENUS, MEDIA_QUERY } from '../../../constants/styles';
import { Link, useLocation } from 'react-router-dom';

import { styled } from 'styled-components';
import { validateCheckDetail } from '../../../utils/validate';

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <>
      {!validateCheckDetail(pathname) && (
        <Layout>
          <Container>
            <MenuWrapper>
              {FOOTER_MENUS.map((items) => (
                <MenuItem to={items.path} key={items.id}>
                  <items.icon active={pathname === items.path} />
                  <MenuName $current={pathname === items.path}>{items.name}</MenuName>
                </MenuItem>
              ))}
            </MenuWrapper>
          </Container>
        </Layout>
      )}
    </>
  );
};

export default Footer;

const Layout = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;

  max-width: 57.6rem;
  width: 100%;
  height: 100%;
  height: 8.6rem;

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
  gap: 20px;

  width: 100%;
  height: 100%;

  margin: 0 4.8rem;
`;

const MenuItem = styled(Link)`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;

  text-decoration: none;
`;

const MenuName = styled.span<{ $current: boolean }>`
  color: ${(props) => (props.$current ? props.theme.colors.point : props.theme.colors.lightGray4)};
  font-family: ${(props) => props.theme.typography.body1.fontFamily};
  font-size: 14px;
  line-height: ${(props) => props.theme.typography.body1.lineHeight};

  ${MEDIA_QUERY.sm} {
    font-size: ${(props) => props.theme.typography.body1.fontSize};
  }
`;
