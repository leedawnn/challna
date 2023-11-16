import styled from 'styled-components';
import { useAtomValue } from 'jotai';
import { guestAlbumStore, guestAuthStore } from '../stores/guestStore';

import GuestHeader from '../components/common/Header/GuestHeader';
import GuestReviewSwiper from '../components/guest/GuestReview/GuestReviewSwiper';
import { HTTP_STATUS } from '../constants/api';
import { putGuestAlbum } from '../api/guest';

const GuestReviewPage = () => {
  const guestAlbum = useAtomValue(guestAlbumStore);
  const guest = useAtomValue(guestAuthStore)!;

  const handleGuestAlbumSend = async () => {
    try {
      const formData = new FormData();

      guestAlbum?.images?.forEach((image, index) => {
        formData.append(`image${index}`, image.file);
      });

      formData.append('content', guestAlbum.message);

      const response = await putGuestAlbum(guest?.accessToken, formData);

      if (response.status === HTTP_STATUS.OK) {
        alert('등록이 완료되었습니다.');
      }
    } catch {
      console.error('ERROR');
    }
  };

  return (
    <Layout>
      <Container>
        <GuestHeader />
        <GuestReviewSwiper />
        <MessageText> {guestAlbum.message.length ? guestAlbum.message : '입력하신 메세지가 없습니다.'} </MessageText>
        <DateText> {guestAlbum.createdAt} </DateText>
        <FinishButton type="button" onClick={handleGuestAlbumSend}>
          등록
        </FinishButton>
      </Container>
    </Layout>
  );
};

export default GuestReviewPage;

const Layout = styled.div`
  width: 57.6rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

const Container = styled.section`
  width: 100%;
  max-width: 100vw;
  min-height: calc(var(--vh, 1vh) * 100);

  background-color: ${({ theme }) => theme.colors.white};
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
`;

const MessageText = styled.span`
  width: calc(100% - 40px);
  height: 126px;

  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-family: ${({ theme }) => theme.typography.body1.fontFamily};

  border-top: 1px solid ${({ theme }) => theme.colors.lightGray2};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray2};

  padding: 20px 0;

  box-sizing: border-box;
`;

const DateText = styled.span`
  width: calc(100% - 40px);

  font-size: 10px;
  color: ${({ theme }) => theme.colors.lightGray5};

  padding-top: 10px;

  box-sizing: border-box;
`;

const FinishButton = styled.button`
  all: unset;

  width: calc(100% - 40px);
  height: 50px;

  position: absolute;
  left: 20px;
  bottom: 30px;

  text-align: center;
  line-height: 50px;

  background-color: ${({ theme }) => theme.colors.point};
  color: ${({ theme }) => theme.colors.white};

  border-radius: 5px;

  cursor: pointer;
`;
