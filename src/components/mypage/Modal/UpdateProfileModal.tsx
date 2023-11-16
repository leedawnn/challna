import * as S from './MyPageModal.styled';

import CloseIcon from '../../../assets/icons/CloseIcon';
import UpdateProfile from '../UpdateProfile/UpdateProfile';
import { useModal } from '../../../provider/ModalProvider';

const UpdateProfileModal = () => {
  const { closeModal } = useModal();

  return (
    <S.MyPageModalContainer>
      <S.MyPageModalHeader>
        <S.MyPageModalTitle> 프로필 설정 </S.MyPageModalTitle>
        <CloseIcon onClick={closeModal} />
      </S.MyPageModalHeader>
      <UpdateProfile />
    </S.MyPageModalContainer>
  );
};

export default UpdateProfileModal;
