import { QRCodeCanvas } from 'qrcode.react';
import * as S from './QRCode.styled';

import CopyIcon from '../../../assets/icons/CopyIcon';
import DownloadIcon from '../../../assets/icons/DownloadIcon';

const QRCode = () => {
  return (
    <S.Container>
      <S.QRCodeWrapper>
        <QRCodeCanvas value="http://localhost:3000/test" style={{ width: '100%', height: '100%' }} />
      </S.QRCodeWrapper>
      <S.ButtonWrapper type="button">
        <S.ButtonText> QR코드 다운로드 </S.ButtonText>
        <DownloadIcon style={{ paddingRight: '8px' }} />
      </S.ButtonWrapper>
      <S.ButtonWrapper type="button">
        <S.ButtonText> 링크 복사 </S.ButtonText>
        <CopyIcon style={{ paddingRight: '12px' }} />
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default QRCode;
