import * as S from './GuestModal.styled';

import DeleteIcon from '../../../assets/icons/DeleteIcon';
import EditIcon from '../../../assets/icons/EditIcon';

const GuestModal = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <EditIcon />
        <S.EditText> 수정 </S.EditText>
      </S.Wrapper>
      <S.Wrapper>
        <DeleteIcon active />
        <S.DeleteText> 삭제 </S.DeleteText>
      </S.Wrapper>
    </S.Container>
  );
};

export default GuestModal;
