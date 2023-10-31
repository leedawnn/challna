import { useAtomValue } from 'jotai';
import * as S from './Profile.styled';

import { userStore } from '../../stores/userStore';

const Profile = () => {
  const user = useAtomValue(userStore)!;

  return (
    <S.Container>
      <S.ProfileWrapper>
        <S.ProfileImage src={user.profile_image} alt={`${user.kakaoName}_profile_image`} />
        <S.ContnetCounterWrapper>
          <S.CountText> 0 </S.CountText>
          <S.CountTitleText> 메시지 </S.CountTitleText>
        </S.ContnetCounterWrapper>
        <S.ContnetCounterWrapper>
          <S.CountText> 0 </S.CountText>
          <S.CountTitleText> 이미지 </S.CountTitleText>
        </S.ContnetCounterWrapper>
      </S.ProfileWrapper>
    </S.Container>
  );
};

export default Profile;
