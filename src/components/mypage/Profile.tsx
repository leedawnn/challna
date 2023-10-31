import { useAtomValue } from 'jotai';
import * as S from './Profile.styled';

import { userStore } from '../../stores/userStore';

const Profile = () => {
  const user = useAtomValue(userStore)!;

  return (
    <S.Container>
      <S.ProfileWrapper>
        <S.ProfileImage src={user.profile_image} alt={`${user.kakaoName}_profile_image`} />
      </S.ProfileWrapper>
    </S.Container>
  );
};

export default Profile;
