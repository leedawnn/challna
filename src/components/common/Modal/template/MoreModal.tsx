import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import * as S from '../Modal.styled';

import ConfirmModal from './ConfirmModal';
import DeleteIcon from '../../../../assets/icons/DeleteIcon';
import useBoardDelete from '../../../../hooks/useBoardDelete';
import useImageDelete from '../../../../hooks/useImageDelete';
import { useModal } from '../../../../provider/ModalProvider';

const MoreModal = () => {
  const { openModal } = useModal();
  const { state } = useLocation();
  const handleImageDelete = useImageDelete();
  const handleBoardDelete = useBoardDelete(state && state.board_id);

  const handleOpenDeleteModal = () => {
    openModal(<ConfirmModal $type="delete" onClick={state ? handleBoardDelete : handleImageDelete} />);
  };

  return (
    <S.ModalContainer>
      <MoreDeleteWrapper onClick={handleOpenDeleteModal}>
        <DeleteIcon active />
        <MoreDeleteText>삭제</MoreDeleteText>
      </MoreDeleteWrapper>
    </S.ModalContainer>
  );
};

export default MoreModal;

const MoreDeleteWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  padding: 0 3rem;
  margin: 4rem 0;
`;

const MoreDeleteText = styled.span`
  color: ${({ theme }) => theme.colors.red};
  margin-left: 1.2rem;
`;
