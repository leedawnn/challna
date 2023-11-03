import { useRef, useState } from 'react';
import { useAtomValue } from 'jotai';
import * as S from './UpdateProfile.styedl';

import PlusImageIcon from '../../../assets/icons/PlusImageIcon';
import { convertBase64 } from '../../../utils';
import { useModal } from '../../../provider/ModalProvider';
import { userStore } from '../../../stores/userStore';

const UpdateProfile = () => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  // const [imageFile, setImageFiles] = useState();
  const [preview, setPreview] = useState<string | null>(null);
  const { closeModal } = useModal();
  const user = useAtomValue(userStore)!;

  const handleUpdateProfileSubmit = (evt: any) => {
    evt.preventDefault();
  };

  const handleProfileImageChange = async (evt: any) => {
    const { files } = evt.target;

    const previewImage = await convertBase64(files[0]);

    setPreview(previewImage as string);
  };

  return (
    <S.ProfileImageWrapper>
      <S.ProfileTitle> 프로필 사진 </S.ProfileTitle>
      <S.UpdateForm onSubmit={handleUpdateProfileSubmit}>
        <S.ProfileImageLabel htmlFor="profileImage">
          <S.ProfileImage src={preview || user?.profile_image} alt={`${user.profile_image}_profile_image`} />
          <PlusImageIcon />
        </S.ProfileImageLabel>
        <S.FileInput type="file" id="profileImage" accept="image/*" onChange={handleProfileImageChange} />
        <S.ProfileNameWrapper>
          <S.ProfileNameLabel htmlFor="profileName"> 이름을 정해주세요. </S.ProfileNameLabel>
          <S.ProfileNameInput type="text" defaultValue={user?.kakaoName} ref={nameRef} />
        </S.ProfileNameWrapper>
        <S.ButtonWrapper>
          <S.SaveButton type="submit"> 저장 </S.SaveButton>
          <S.CancelButton type="button" onClick={closeModal}>
            취소
          </S.CancelButton>
        </S.ButtonWrapper>
      </S.UpdateForm>
    </S.ProfileImageWrapper>
  );
};

export default UpdateProfile;
