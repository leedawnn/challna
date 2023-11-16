import { useRef, useState } from 'react';
import { useAtom } from 'jotai';
import * as S from './UpdateProfile.styedl';

import { HTTP_STATUS } from '../../../constants/api';
import PlusImageIcon from '../../../assets/icons/PlusImageIcon';
import { convertBase64 } from '../../../utils';
import { putUpdateUserProfile } from '../../../api/auth';
import { useModal } from '../../../provider/ModalProvider';
import { userStore } from '../../../stores/userStore';

const UpdateProfile = () => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const [imageFile, setImageFiles] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const { closeModal } = useModal();
  const [user, setUser] = useAtom(userStore);

  const handleUpdateProfileSubmit = async (evt: React.FormEvent) => {
    evt.preventDefault();

    try {
      const data = new FormData();
      data.append('nickName', nameRef?.current?.value as string);

      if (imageFile) {
        data.append('imageFile', imageFile);
      }

      const response = await putUpdateUserProfile(user?.accessToken as string, data);

      if (response.status === HTTP_STATUS.OK) {
        setUser({
          ...response.data.kakaoUserInfoDto,
          ...response.data.token,
        });
        closeModal();
      }
    } catch {
      console.error('ERROR');
    }
  };

  const handleProfileImageChange = async (evt: React.ChangeEvent<HTMLInputElement>) => {
    const files = evt.target.files as FileList;

    const previewImage = await convertBase64(files[0]);

    setPreview(previewImage as string);
    setImageFiles(files[0]);
  };

  return (
    <S.ProfileImageWrapper>
      <S.ProfileTitle> 프로필 사진 </S.ProfileTitle>
      <S.UpdateForm onSubmit={handleUpdateProfileSubmit}>
        <S.ProfileImageLabel htmlFor="profileImage">
          <S.ProfileImage src={preview || user?.profile_image} alt={`${user?.profile_image}_profile_image`} />
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
