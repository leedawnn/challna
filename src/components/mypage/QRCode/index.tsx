import { QRCodeCanvas } from 'qrcode.react';
import { useAtomValue } from 'jotai';
import { useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import * as S from './QRCode.styled';

import { USER_QRCODE_SHARE, getQRCodeValue } from '../../../api/mypage';

import CopyIcon from '../../../assets/icons/CopyIcon';
import DownloadIcon from '../../../assets/icons/DownloadIcon';
import { userStore } from '../../../stores/userStore';

const QRCode = () => {
  const user = useAtomValue(userStore)!;
  const { data: qrCodeLink } = useQuery(USER_QRCODE_SHARE, () => getQRCodeValue(user.accessToken), {
    staleTime: Infinity,
  });

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
        <QRCodeCanvas value={qrCodeLink?.data || ''} style={{ width: '100%', height: '100%' }} />
      </S.QRCodeWrapper>
      <S.ButtonWrapper type="button" onClick={handleDownloadQRCode}>
        <S.ButtonText> QR코드 다운로드 </S.ButtonText>
        <DownloadIcon style={{ paddingRight: '8px' }} />
      </S.ButtonWrapper>
      <S.ButtonWrapper type="button" onClick={handleCopyClipBoard(qrCodeLink?.data || '')}>
        <S.ButtonText> 링크 복사 </S.ButtonText>
        <CopyIcon style={{ paddingRight: '12px' }} />
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default QRCode;
