import { useEffect, useRef } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import deleteIcon from '../../../assets/delete.svg';

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
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};

const MessageMenuModal = ({ isModalOpen, setIsModalOpen }: MessageMenuModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleMessageDelete = () => {
    setIsModalOpen((prev) => !prev);

    // 삭제 로직 추가 예정
  };

  useEffect(() => {
    const closeModal = (e: MouseEvent) => {
      if (isModalOpen && modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener('mousedown', closeModal);

    return () => {
      document.removeEventListener('mousedown', closeModal);
    };
  }, [isModalOpen]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  return (
    <>
      {isModalOpen && (
        <div ref={modalRef}>
          <Layout>
            <DeleteModalWrapper onClick={handleMessageDelete}>
              <img src={deleteIcon} alt="삭제 버튼 아이콘" />
              <DeleteText>삭제</DeleteText>
            </DeleteModalWrapper>
          </Layout>
        </div>
      )}
    </>
  );
};

export default MessageMenuModal;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  position: fixed;
  z-index: 1;

  left: 50%;
  bottom: 0;
  transform: translate(-50%, 0);

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); // 임의 box-shadow

  max-width: 57.6rem;
  width: 100%;
  height: calc(var(--vh) * 12.3);

  overflow-y: auto;
`;

const DeleteModalWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 3rem;
  cursor: pointer;
`;

const DeleteText = styled.span`
  color: ${(props) => props.theme.colors.red};
  margin-left: 1.2rem;
`;
