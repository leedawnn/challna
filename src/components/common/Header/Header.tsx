import { useLocation } from 'react-router-dom';
import * as S from './Header.styled';

import CommonHeader from './CommonHeader';
import UserHeader from './UserHeader';
import { validateCheckHeader } from '../../../utils/validate';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <S.Layout $current={validateCheckHeader(pathname)}>
      {validateCheckHeader(pathname) ? <CommonHeader /> : <UserHeader />}
    </S.Layout>
  );
};

export default Header;
