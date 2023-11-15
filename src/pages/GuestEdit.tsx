import styled from 'styled-components';
import { useRef } from 'react';
import { useSetAtom } from 'jotai';
import GuestAlbumSwiper from '../components/guestEdit/GuestAlbumSwiper';
import GuestHeader from '../components/layout/Header/GuestHeader';
import { guestAlbumStore } from '../stores/guestStore';

const GuestEditPage = () => {
  const messageText = useRef<HTMLTextAreaElement | null>(null);
  const setGuestAlbum = useSetAtom(guestAlbumStore);

  const handleGuestMessageSubmit = () => {
    setGuestAlbum((prev) => ({
      ...prev,
      message: messageText.current ? messageText.current.value : prev.message,
    }));
  };

  return (
    <Layout>
      <Container>
        <GuestHeader />
        <MessageTextArea placeholder="메시지 입력..." ref={messageText} />
        <GuestAlbumSwiper />
        <FinishButton type="button" onClick={handleGuestMessageSubmit}>
          완료
        </FinishButton>
      </Container>
    </Layout>
  );
};

export default GuestEditPage;

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

const MessageTextArea = styled.textarea`
  all: unset;

  width: calc(100% - 40px);
  height: 66px;

  padding: 30px 0 20px 0;

  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray2};
`;

const FinishButton = styled.button`
  all: unset;

  width: calc(100% - 40px);
  height: 50px;

  text-align: center;
  line-height: 50px;

  background-color: ${({ theme }) => theme.colors.point};
  color: ${({ theme }) => theme.colors.white};

  border-radius: 5px;

  cursor: pointer;
`;
