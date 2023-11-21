import { useAtomValue, useSetAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';
import * as S from './GuestModal.styled';

import { guestAlbumStore, guestAuthStore, initialAlbumStore } from '../../../stores/guestStore';

import ConfirmModal from '../../common/Modal/template/ConfirmModal';
import DeleteIcon from '../../../assets/icons/DeleteIcon';
import EditIcon from '../../../assets/icons/EditIcon';
import { ROUTES_PATH } from '../../../constants/routes';
import { useModal } from '../../../provider/ModalProvider';

const GuestModal = () => {
  const navigate = useNavigate();
  const guest = useAtomValue(guestAuthStore);
  const setGuestAlbum = useSetAtom(guestAlbumStore);
  const { openModal } = useModal();

  const handleEditMove = () => {
    navigate(ROUTES_PATH.guestEdit);
  };

  const handleGuestAlbumDelete = () => {
    setGuestAlbum(initialAlbumStore);
    navigate(`${ROUTES_PATH.guest}?host=${guest?.kakaoId}`);
  };

  const handleModalOpen = () => {
    openModal(<ConfirmModal $type="delete" onClick={handleGuestAlbumDelete} />);
  };

  return (
    <S.Container>
      <S.Wrapper onClick={handleEditMove}>
        <EditIcon />
        <S.EditText> 수정 </S.EditText>
      </S.Wrapper>
      <S.Wrapper onClick={handleModalOpen}>
        <DeleteIcon active />
        <S.DeleteText> 삭제 </S.DeleteText>
      </S.Wrapper>
    </S.Container>
  );
};

export default GuestModal;
