import * as S from './QRCode.styled';

import CopyIcon from '../../../assets/icons/CopyIcon';
import DownloadIcon from '../../../assets/icons/DownloadIcon';

const QRCode = () => {
  return (
    <S.Container>
      <S.QRCodeWrapper />
      <S.ButtonWrapper type="button">
        <S.ButtonText> QR코드 다운로드 </S.ButtonText>
        <DownloadIcon />
      </S.ButtonWrapper>
      <S.ButtonWrapper type="button">
        <S.ButtonText> 링크 복사 </S.ButtonText>
        <CopyIcon />
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default QRCode;
