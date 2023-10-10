import * as S from './Modal.styled';

import DeleteIcon from '../../../assets/icons/DeleteIcon';
import useHandleDeleteBoardData from '../../../hooks/\buseHandleDeleteBoardData';

const MoreModal = () => {
  const handleDeleteBoardData = useHandleDeleteBoardData();

  return (
    <S.MoreDeleteWrapper onClick={handleDeleteBoardData}>
      <DeleteIcon active />
      <S.MoreDeleteText>삭제</S.MoreDeleteText>
    </S.MoreDeleteWrapper>
  );
};

export default MoreModal;
