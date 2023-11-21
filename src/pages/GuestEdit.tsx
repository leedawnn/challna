import { useEffect, useRef } from 'react';

import styled from 'styled-components';
import { useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';
import GuestEditSwiper from '../components/guest/GuestEdit/GuestEditSwiper';
import GuestHeader from '../components/common/Header/GuestHeader';
import { ROUTES_PATH } from '../constants/routes';
import { guestAlbumStore } from '../stores/guestStore';
import { useModal } from '../provider/ModalProvider';

const GuestEditPage = () => {
  const { closeModal } = useModal();
  const messageText = useRef<HTMLTextAreaElement | null>(null);
  const [guestAlbum, setGuestAlbum] = useAtom(guestAlbumStore);
  const navigate = useNavigate();

  const handleGuestMessageSubmit = () => {
    setGuestAlbum((prev) => ({
      ...prev,
      message: messageText.current ? messageText.current.value : prev.message,
    }));
    navigate(ROUTES_PATH.guestReview);
  };

  useEffect(() => {
    closeModal();
  }, []);

  return (
    <Layout>
      <Container>
        <GuestHeader />
        <MessageTextArea placeholder="메시지 입력..." ref={messageText} defaultValue={guestAlbum.message} />
        <GuestEditSwiper />
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
