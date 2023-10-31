import * as S from './Profile.styled';

import RightIcon from '../../assets/icons/RightIcon';

const UserMenu = () => {
  return (
    <S.Menu>
      <S.MenuList>
        <S.ListContentText> moment 이벤트 </S.ListContentText>
        <RightIcon $type="message" />
      </S.MenuList>
      <S.MenuList>
        <S.ListContentText> 로그아웃 </S.ListContentText>
        <RightIcon $type="message" />
      </S.MenuList>
    </S.Menu>
  );
};

export default UserMenu;
