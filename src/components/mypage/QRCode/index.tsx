import { QRCodeCanvas } from 'qrcode.react';
import { useAtomValue } from 'jotai';
import { useCallback } from 'react';
import * as S from './QRCode.styled';

import CopyIcon from '../../../assets/icons/CopyIcon';
import DownloadIcon from '../../../assets/icons/DownloadIcon';
import { convertQRCodeLink } from '../../../utils';
import { userStore } from '../../../stores/userStore';

const QRCode = () => {
  const user = useAtomValue(userStore)!;

  const handleDownloadQRCode = useCallback(() => {
    const canvas = document.querySelector('canvas');
    const url = canvas ? canvas.toDataURL('image/png') : '';
    const link = document.createElement('a');

    link.href = url;
    link.download = `qr-${user.kakaoName}.png`;

    link.click();
  }, []);

  const handleCopyClipBoard = (text: string) => async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      console.error('복사 실패!');
    }
  };

  return (
    <S.Container>
      <S.QRCodeWrapper>
        <QRCodeCanvas value={convertQRCodeLink(user?.kakaoId)} style={{ width: '100%', height: '100%' }} />
      </S.QRCodeWrapper>
      <S.ButtonWrapper type="button" onClick={handleDownloadQRCode}>
        <S.ButtonText> QR코드 다운로드 </S.ButtonText>
        <DownloadIcon />
      </S.ButtonWrapper>
      <S.ButtonWrapper type="button" onClick={handleCopyClipBoard(convertQRCodeLink(user?.kakaoId))}>
        <S.ButtonText> 링크 복사 </S.ButtonText>
        <CopyIcon />
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default QRCode;
