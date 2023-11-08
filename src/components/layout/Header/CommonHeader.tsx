import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './Header.styled';

import BackIcon from '../../../assets/icons/BackIcon';
import MoreIcon from '../../../assets/icons/MoreIcon';
import MoreModal from '../../common/Modal/template/MoreModal';
import { ROUTES_PATH } from '../../../constants/routes';
import { useModal } from '../../../provider/ModalProvider';

const CommonHeader = () => {
  const { openModal } = useModal();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleBackUrl = () => {
    navigate(-1);
  };

  const handleOpenMoreModal = () => {
    openModal(<MoreModal />);
  };

  return (
    <S.CommonWrapper $current={pathname === ROUTES_PATH.event}>
      <BackIcon onClick={handleBackUrl} />
      {pathname === ROUTES_PATH.event ? (
        <S.EventTitle> 이벤트 </S.EventTitle>
      ) : (
        <MoreIcon onClick={handleOpenMoreModal} />
      )}
    </S.CommonWrapper>
  );
};

export default CommonHeader;
