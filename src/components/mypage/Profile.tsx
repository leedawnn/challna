import { Suspense } from 'react';
import { useAtomValue } from 'jotai';
import * as S from './Profile.styled';

import ContentCount from './CountCount';
import { ProfileCount } from '../common/Skeleton';
import { userStore } from '../../stores/userStore';

const Profile = () => {
  const user = useAtomValue(userStore)!;

  return (
    <S.Container>
      <S.ProfileWrapper>
        <S.ProfileImage src={user.profile_image} alt={`${user.kakaoName}_profile_image`} />
        <Suspense fallback={<ProfileCount />}>
          <ContentCount />
        </Suspense>
      </S.ProfileWrapper>
    </S.Container>
  );
};

export default Profile;
