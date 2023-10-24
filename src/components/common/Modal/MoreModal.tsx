import * as S from './Modal.styled';

import DeleteConfirmModal from './DeleteConfirmModal';
import DeleteIcon from '../../../assets/icons/DeleteIcon';
import { useModal } from '../../../provider/ModalProvider';

const MoreModal = () => {
  const { handleOpenModal } = useModal();

  const handleOpenDeleteModal = () => {
    handleOpenModal(<DeleteConfirmModal />);
  };

  return (
    <S.MoreDeleteWrapper onClick={handleOpenDeleteModal}>
      <DeleteIcon active />
      <S.MoreDeleteText>삭제</S.MoreDeleteText>
    </S.MoreDeleteWrapper>
  );
};

export default MoreModal;
