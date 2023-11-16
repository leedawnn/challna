import styled from 'styled-components';
import { useAtomValue } from 'jotai';
import GuestHeader from '../components/layout/Header/GuestHeader';
import GuestReviewSwiper from '../components/guestReview/GuestReviewSwiper';
import { guestAlbumStore } from '../stores/guestStore';

const GuestReviewPage = () => {
  const guestAlbum = useAtomValue(guestAlbumStore);

  return (
    <Layout>
      <Container>
        <GuestHeader />
        <GuestReviewSwiper />
        <MessageText> {guestAlbum.message.length ? guestAlbum.message : '입력하신 메세지가 없습니다.'} </MessageText>
        <DateText> {guestAlbum.createdAt} </DateText>
        <FinishButton type="button"> 등록 </FinishButton>
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
