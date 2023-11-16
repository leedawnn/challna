import { useAtomValue } from 'jotai';
import { useLocation } from 'react-router-dom';
import * as S from './Header.styled';

import { ROUTES_PATH } from '../../../constants/routes';
import RightIcon from '../../../assets/icons/RightIcon';
import { userStore } from '../../../stores/userStore';

const UserHeader = () => {
  const { pathname } = useLocation();
  const user = useAtomValue(userStore)!;

  return (
    <S.UserWrapper to={ROUTES_PATH.mypage}>
      <S.UserTitle> {user?.kakaoName} 님 </S.UserTitle>
      {pathname !== ROUTES_PATH.mypage && <RightIcon $type="userInfo" />}
    </S.UserWrapper>
  );
};

export default UserHeader;
