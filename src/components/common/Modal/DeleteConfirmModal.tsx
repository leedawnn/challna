import * as S from './Modal.styled';

import useHandleDeleteBoardData from '../../../hooks/\buseHandleDeleteBoardData';
import { useModal } from '../../../provider/ModalProvider';

const DeleteConfirmModal = () => {
  const { handleCloseModal } = useModal();
  const handleDeleteBoardData = useHandleDeleteBoardData();

  return (
    <S.DeleteConfirmWrapper>
      <S.DeleteConfirmTitle>정말 삭제 하시겠습니까?</S.DeleteConfirmTitle>
      <S.DeleteConfirmButton onClick={handleDeleteBoardData}>삭제</S.DeleteConfirmButton>
      <S.DeleteCancelButton onClick={handleCloseModal}>취소</S.DeleteCancelButton>
    </S.DeleteConfirmWrapper>
  );
};

export default DeleteConfirmModal;
