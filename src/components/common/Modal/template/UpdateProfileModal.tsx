import * as S from '../Modal.styled';

import CloseIcon from '../../../../assets/icons/CloseIcon';
import UpdateProfile from '../../../mypage/UpdateProfile';
import { useModal } from '../../../../provider/ModalProvider';

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
