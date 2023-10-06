import { MouseEventHandler } from 'react';
import * as S from './Modal.styled';

import DeleteIcon from '../../../assets/icons/DeleteIcon';

/**
 *
 * MessageMenuModal은 메시지 탭에서 더보기(...) 버튼에 연결하는 모달입니다.
 *
 * props로 isModalOpen에 해당하는 boolean이 필요하며, createPortal을 사용하여야합니다.
 *
 * @example
 * ts`
 *  {isModalOpen && createPortal(<MessageMenuModal은 isModalOpen={isModalOpen} />, document.body)}
 * `;
 */

type Props = {
  handleChangeVisible: () => void;
};

const MoreModal = ({ handleChangeVisible }: Props) => {
  const handleMessageDelete = () => {
    handleChangeVisible();
    // 삭제 로직 추가 예정
  };

  const handlePreventCloseModal: MouseEventHandler = (event) => {
    event.stopPropagation();
  };

  return (
    <S.BackdropLayout onClick={handleChangeVisible}>
      <S.ModalContainer onClick={handlePreventCloseModal}>
        <S.MoreDeleteWrapper onClick={handleMessageDelete}>
          <DeleteIcon active />
          <S.MoreDeleteText>삭제</S.MoreDeleteText>
        </S.MoreDeleteWrapper>
      </S.ModalContainer>
    </S.BackdropLayout>
  );
};

export default MoreModal;
