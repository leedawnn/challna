import styled from 'styled-components';
import * as S from '../Modal.styled';

import ConfirmModal from './ConfirmModal';
import DeleteIcon from '../../../../assets/icons/DeleteIcon';
import useHandleDeleteBoardData from '../../../../hooks/useHandleDeleteBoardData';
import { useModal } from '../../../../provider/ModalProvider';

const MoreModal = () => {
  const { openModal } = useModal();
  const handleDeleteBoardData = useHandleDeleteBoardData();

  const handleOpenDeleteModal = () => {
    openModal(<ConfirmModal $type="delete" onClick={handleDeleteBoardData} />);
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
