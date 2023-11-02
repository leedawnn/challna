import styled from 'styled-components';
import { useAtomValue } from 'jotai';
import * as S from '../Modal.styled';

import CloseIcon from '../../../../assets/icons/CloseIcon';
import PlusImageIcon from '../../../../assets/icons/PlusImageIcon';
import { useModal } from '../../../../provider/ModalProvider';
import { userStore } from '../../../../stores/userStore';

const UpdateProfileModal = () => {
  const user = useAtomValue(userStore)!;
  const { closeModal } = useModal();

  return (
    <S.MyPageModalContainer>
      <S.MyPageModalHeader>
        <S.MyPageModalTitle> 프로필 설정 </S.MyPageModalTitle>
        <CloseIcon onClick={closeModal} />
      </S.MyPageModalHeader>
      <ProfileImageWrapper>
        <ProfileTitle> 프로필 사진 </ProfileTitle>
        <ProfileUploadForm>
          <UploadProfileLabel htmlFor="profileImage">
            <ProfileImage src={user?.profile_image} alt={`${user.profile_image}_profile_image`} />
            <PlusImageIcon />
          </UploadProfileLabel>
          <ProfileUploadInput type="file" id="profileImage" accept="image/*" />
        </ProfileUploadForm>
      </ProfileImageWrapper>
    </S.MyPageModalContainer>
  );
};

export default UpdateProfileModal;

const ProfileImageWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;

  margin-top: 30px;
`;

const ProfileTitle = styled.span`
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-family: ${({ theme }) => theme.typography.body1.fontFamily};
  color: ${({ theme }) => theme.colors.gray1};
`;

const ProfileUploadForm = styled.form`
  position: relative;

  width: 80px;
  height: 80px;

  border-radius: 50%;

  display: flex;
  justify-content: cneter;
  align-content: center;
`;

const UploadProfileLabel = styled.label`
  position: relative;

  cursor: pointer;

  & > svg {
    position: absolute;
    bottom: 0;
    right: -5px;
    z-index: 30;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;

  border-radius: 50%;

  object-fit: contain;
`;

const ProfileUploadInput = styled.input`
  display: none;
`;
