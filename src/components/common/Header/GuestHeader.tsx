import { useLocation, useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import BackIcon from '../../../assets/icons/BackIcon';
import GuestModal from '../../guest/Modal/GuestModal';
import MoreIcon from '../../../assets/icons/MoreIcon';
import { ROUTES_PATH } from '../../../constants/routes';
import { useModal } from '../../../provider/ModalProvider';

const GuestHeader = () => {
  const { openModal } = useModal();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleBackToUrl = () => {
    navigate(-1);
  };

  const handleMoreMenuOpen = () => {
    openModal(<GuestModal />);
  };

  return (
    <Container>
      <BackIcon onClick={handleBackToUrl} style={{ cursor: 'pointer' }} />
      <Title> 새 게시물 </Title>
      <MoreIcon
        onClick={handleMoreMenuOpen}
        style={{ visibility: pathname === ROUTES_PATH.guestEdit ? 'hidden' : 'visible', cursor: 'pointer' }}
      />
    </Container>
  );
};

export default GuestHeader;

const Container = styled.header`
  width: 100%;
  height: 6rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 16px 20px;
  box-sizing: border-box;

  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray2};
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.typography.subHead3.fontSize};
  font-family: ${({ theme }) => theme.typography.subHead3.fontFamily};
`;
