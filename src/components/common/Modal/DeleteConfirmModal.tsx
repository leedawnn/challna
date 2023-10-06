import { MouseEventHandler } from 'react';
import * as S from './Modal.styled';

/**
 *
 * DeleteModal은 삭제 버튼에 연결하는 모달입니다.
 *
 * props로 isModalOpen에 해당하는 boolean이 필요하며, createPortal을 사용하여야합니다.
 *
 * @example
 * ts`
 *  {isModalOpen && createPortal(<DeleteModal isModalOpen={isModalOpen} />, document.body)}
 * `;
 */

type Props = {
  handleChangeVisible: () => void;
};

const DeleteConfirmModal = ({ handleChangeVisible }: Props) => {
  const handlePhotoDelete = () => {
    // 삭제 로직 추가 예정

    handleChangeVisible();
  };

  const handlePreventCloseModal: MouseEventHandler = (event) => {
    event.stopPropagation();
  };

  return (
    <S.BackdropLayout onClick={handleChangeVisible}>
      <S.ModalContainer onClick={handlePreventCloseModal}>
        <S.DeleteConfirmWrapper>
          <S.DeleteConfirmTitle>정말 삭제 하시겠습니까?</S.DeleteConfirmTitle>
          <S.DeleteConfirmButton onClick={handlePhotoDelete}>삭제</S.DeleteConfirmButton>
          <S.DeleteCancelButton onClick={handleChangeVisible}>취소</S.DeleteCancelButton>
        </S.DeleteConfirmWrapper>
      </S.ModalContainer>
    </S.BackdropLayout>
  );
};

export default DeleteConfirmModal;
