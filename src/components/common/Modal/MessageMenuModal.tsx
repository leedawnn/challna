import { useEffect, useRef } from 'react';

import styled from 'styled-components';
import DeleteIcon from '../../../assets/icons/DeleteIcon';

/**
 *
 * MessageMenuModal은 메시지 탭에서 더보기(...) 버튼에 연결하는 모달입니다.
 *
 * props로 isModalOpen에 해당하는 boolean이 필요하며, createPortal을 사용하여야합니다.
 *
 * @example
 * ts`
 *  {isModalOpen && createPortal(<MessageMenuModal은 isModalOpen={isModalOpen} />, document.body)}
 * `;
 */

type MessageMenuModalProps = {
  isModalOpen: boolean;
  handleChangeVisible: () => void;
};

const MessageMenuModal = ({ isModalOpen, handleChangeVisible }: MessageMenuModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleMessageDelete = () => {
    handleChangeVisible();

    // 삭제 로직 추가 예정
  };

  useEffect(() => {
    const closeModal = (e: MouseEvent) => {
      if (isModalOpen && modalRef.current && !modalRef.current.contains(e.target as Node)) {
        handleChangeVisible();
      }
    };

    document.addEventListener('mousedown', closeModal);

    return () => {
      document.removeEventListener('mousedown', closeModal);
    };
  }, [isModalOpen, handleChangeVisible]);

  return (
    <ModalBackground>
      <Layout ref={modalRef}>
        <DeleteModalWrapper onClick={handleMessageDelete}>
          <DeleteIcon active />
          <DeleteText>삭제</DeleteText>
        </DeleteModalWrapper>
      </Layout>
    </ModalBackground>
  );
};

export default MessageMenuModal;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 99;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  position: fixed;
  z-index: 11;

  left: 50%;
  bottom: 0;
  transform: translate(-50%, 0);

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); // 임의 box-shadow

  max-width: 57.6rem;
  width: 100%;
  height: calc(var(--vh) * 12.3);

  overflow-y: hidden;
`;

const DeleteModalWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 3rem;
  cursor: pointer;
`;

const DeleteText = styled.span`
  color: ${({ theme }) => theme.colors.red};
  margin-left: 1.2rem;
`;
