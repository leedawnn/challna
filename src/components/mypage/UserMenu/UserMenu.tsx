import { useAtomValue } from 'jotai';
import { useNavigate } from 'react-router-dom';
import * as S from './UserMenu.styled';

import ConfirmModal from '../../common/Modal/template/ConfirmModal';
import { HTTP_STATUS } from '../../../constants/api';
import { ROUTES_PATH } from '../../../constants/routes';
import RightIcon from '../../../assets/icons/RightIcon';
import { postUserLogout } from '../../../api/auth';
import { useModal } from '../../../provider/ModalProvider';
import { userStore } from '../../../stores/userStore';

const UserMenu = () => {
  const user = useAtomValue(userStore)!;
  const navigate = useNavigate();
  const { openModal, closeModal } = useModal();
  const handleLogout = async () => {
    try {
      const response = await postUserLogout(user?.accessToken);
      if (HTTP_STATUS.OK === response.status) {
        closeModal();
        navigate(ROUTES_PATH.login);
      }
    } catch {
      console.error('로그아웃 에러 발생!');
    }
  };

  const handleOpenLogoutModal = () => {
    openModal(<ConfirmModal $type="logout" onClick={handleLogout} />);
  };

  const handleMoveEventPage = () => {
    navigate(ROUTES_PATH.event);
  };

  return (
    <S.Menu>
      <S.MenuList onClick={handleMoveEventPage}>
        <S.ListContentText> moment 이벤트 </S.ListContentText>
        <RightIcon $type="message" />
      </S.MenuList>
      <S.MenuList onClick={handleOpenLogoutModal}>
        <S.ListContentText> 로그아웃 </S.ListContentText>
        <RightIcon $type="message" />
      </S.MenuList>
    </S.Menu>
  );
};

export default UserMenu;
