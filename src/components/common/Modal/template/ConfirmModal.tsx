import * as S from '../Modal.styled';

import { useModal } from '../../../../provider/ModalProvider';

const MODAL_TYPE = {
  delete: {
    title: '정말 삭제 하시겠습니까?',
    confirm: '삭제',
    bgColor: '#F45959',
  },
  logout: {
    title: '정말 로그아웃 하시겠습니까?',
    confirm: '로그아웃',
    bgColor: '#92B5D9',
  },
} as const;

type Props = {
  $type: keyof typeof MODAL_TYPE;
  onClick: () => void;
};

const ConfirmModal = ({ $type, onClick }: Props) => {
  const { closeModal } = useModal();
  const { title, confirm, bgColor } = MODAL_TYPE[$type];

  return (
    <S.DeleteModalContainer>
      <S.ConfirmModalWrapper>
        <S.ConfirmTitle>{title}</S.ConfirmTitle>
        <S.ConfirmButton onClick={onClick} bgColor={bgColor}>
          {confirm}
        </S.ConfirmButton>
        <S.ConfirmCancelButton onClick={closeModal}>취소</S.ConfirmCancelButton>
      </S.ConfirmModalWrapper>
    </S.DeleteModalContainer>
  );
};

export default ConfirmModal;
