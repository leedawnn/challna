import { ROUTES_PATH } from '../constants/routes';

/**
 * 📅 날짜 형식을 변환하는 함수
 *
 * @param dateString 📅 변환하고자 하는 날짜
 * @returns YYYY-MM-DD HH-MM-SS 형태의 변환된 날짜
 */

export const formatDate = (dateString?: string): string => {
  if (typeof dateString !== 'string') return '';

  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');

  const hours = `${date.getHours()}`.padStart(2, '0');
  const minutes = `${date.getMinutes()}`.padStart(2, '0');
  const seconds = `${date.getSeconds()}`.padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

/**
 * 📡 앨범 내 이미지 또는 게시판 자체를 삭제할 것인지 확인하고 해당 URL을 반환하는 함수
 *
 * @param pathname 앨범 내 이미지, 게시글 삭제인지 확인을 하기 위한 현재 URL
 * @param id 이미지 ID 또는 게시판 ID
 * @returns 앨범 또는 게시판 삭제 URL
 */

export const getDeleteUrl = (pathname: string, id: number) => {
  return pathname === ROUTES_PATH.albumDetail ? `/album/${id}` : `/board/${id}`;
};

/**
 * 🌁 미리보기를 위한 이미지 파일 변환 함수
 * @param file 이미지 파일
 * @returns 성공시, 미리보기 이미지 URL, 실패시, 에러 반환
 */

export const convertBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};

/**
 * 🔗 QRCode 링크 생성 함수
 * @param id 호스트측 카카오 ID
 * @returns QRCode Link
 */

export const convertQRCodeLink = (id: number) => `${import.meta.env.VITE_BASE_URL}/guest?host=${id}`;
