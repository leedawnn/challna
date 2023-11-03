import { useAtomValue } from 'jotai';
import * as S from './UpdateProfile.styedl';

import PlusImageIcon from '../../../assets/icons/PlusImageIcon';
import { userStore } from '../../../stores/userStore';

const UpdateProfile = () => {
  const user = useAtomValue(userStore)!;

  return (
    <S.ProfileImageWrapper>
      <S.ProfileTitle> 프로필 사진 </S.ProfileTitle>
      <S.UpdateForm>
        <S.ProfileImageLabel>
          <S.ProfileImage src={user?.profile_image} alt={`${user.profile_image}_profile_image`} />
          <PlusImageIcon />
        </S.ProfileImageLabel>
        <S.FileInput type="file" id="profileImage" accept="image/*" />
        <S.ProfileNameWrapper>
          <S.ProfileNameLabel htmlFor="profileName"> 이름을 정해주세요. </S.ProfileNameLabel>
          <S.ProfileNameInput type="text" />
        </S.ProfileNameWrapper>
        <S.ButtonWrapper>
          <S.SaveButton type="button"> 저장 </S.SaveButton>
          <S.CancelButton type="button"> 취소 </S.CancelButton>
        </S.ButtonWrapper>
      </S.UpdateForm>
    </S.ProfileImageWrapper>
  );
};

export default UpdateProfile;
