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
      <ProfileNameWrapper>
        <ProfileNameLabel htmlFor="profileName"> 이름을 정해주세요. </ProfileNameLabel>
        <ProfileNameInput type="text" />
      </ProfileNameWrapper>
      <ButtonWrapper>
        <SaveButton type="button"> 저장 </SaveButton>
        <CancelButton type="button"> 취소</CancelButton>
      </ButtonWrapper>
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

  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.2);
`;

const ProfileUploadInput = styled.input`
  display: none;
`;

const ProfileNameWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 6px;

  margin-top: 38px;
`;

const ProfileNameLabel = styled.label`
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-family: ${({ theme }) => theme.typography.body1.fontFamily};
  color: ${({ theme }) => theme.colors.gray1};
`;

const ProfileNameInput = styled.input`
  all: unset;

  width: 100%;
  height: 40px;

  padding-left: 12px;
  box-sizing: border-box;

  background-color: ${({ theme }) => theme.colors.lightGray};

  border: 1px solid ${({ theme }) => theme.colors.lightGray3};
  border-radius: 5px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 40px;
`;

const SaveButton = styled.button`
  all: unset;

  width: 100%;
  height: 40px;

  text-align: center;

  border-style: none;
  border-radius: 5px;
  box-shadow: 0px 4px 12px 0px rgba(146, 181, 217, 0.5);
  background-color: ${({ theme }) => theme.colors.point};

  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.subHead};
  font-family: ${({ theme }) => theme.typography.subHead};
  line-height: 40px;

  cursor: pointer;
`;

const CancelButton = styled.button`
  all: unset;

  width: 100%;
  height: 40px;

  text-align: center;
  text-decoration: underline;

  font-size: ${({ theme }) => theme.typography.subHead};
  font-family: ${({ theme }) => theme.typography.subHead};

  cursor: pointer;
`;
