import styled from 'styled-components';
import { useRef } from 'react';
import GuestAlbumSwiper from '../components/guestEdit/GuestAlbumSwiper';
import GuestHeader from '../components/layout/Header/GuestHeader';

const GuestEditPage = () => {
  const messageText = useRef<HTMLTextAreaElement | null>(null);

  return (
    <Layout>
      <Container>
        <GuestHeader />
        <MessageTextArea placeholder="메시지 입력..." ref={messageText} />
        <GuestAlbumSwiper />
      </Container>
    </Layout>
  );
};

export default GuestEditPage;

const Layout = styled.div`
  width: 57.6rem;
  position: relative;

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
`;

const MessageTextArea = styled.textarea`
  all: unset;

  width: calc(100% - 40px);
  height: 66px;

  padding: 30px 0 20px 0;

  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray2};
`;
