import * as S from '../Modal.styled';

import CloseIcon from '../../../../assets/icons/CloseIcon';
import QRCode from '../../../mypage/QRCode';
import { useModal } from '../../../../provider/ModalProvider';

const QRCodeModal = () => {
  const { closeModal } = useModal();

  return (
    <S.MyPageModalContainer>
      <S.MyPageModalHeader>
        <S.MyPageModalTitle style={{ paddingRight: '8px' }}> 공유하기 </S.MyPageModalTitle>
        <CloseIcon onClick={closeModal} />
      </S.MyPageModalHeader>
      <QRCode />
    </S.MyPageModalContainer>
  );
};

export default QRCodeModal;
