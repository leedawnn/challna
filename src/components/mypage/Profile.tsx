import { Suspense } from 'react';
import { useAtomValue } from 'jotai';
import * as S from './Profile.styled';

import ContentCount from './CountCount';
import { ProfileCount } from '../common/Skeleton';
import QRCodeModal from '../common/Modal/template/QRCodeModal';
import UpdateProfileModal from '../common/Modal/template/UpdateProfileModal';
import { useModal } from '../../provider/ModalProvider';
import { userStore } from '../../stores/userStore';

const Profile = () => {
  const user = useAtomValue(userStore)!;
  const { openModal } = useModal();

  const handleOpenProfileImage = () => {
    openModal(<S.UserImage src={user.profile_image} alt={`${user.kakaoName} 님의 프로필 이미지`} />);
  };

  const handleOpenUpdateProfile = () => {
    openModal(<UpdateProfileModal />);
  };

  const handleOpenQRCode = () => {
    openModal(<QRCodeModal />);
  };

  return (
    <S.Container>
      <S.ProfileWrapper>
        <S.ProfileImage
          src={user.profile_image}
          alt={`${user.kakaoName}_profile_image`}
          onClick={handleOpenProfileImage}
        />
        <Suspense fallback={<ProfileCount />}>
          <ContentCount />
        </Suspense>
      </S.ProfileWrapper>
      <S.ButtonWrapper>
        <S.ProfileButton type="button" onClick={handleOpenUpdateProfile}>
          프로필 편집
        </S.ProfileButton>
        <S.ProfileButton type="button" onClick={handleOpenQRCode}>
          앨범 공유
        </S.ProfileButton>
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default Profile;
