import { useEffect, useRef } from 'react';

import styled from 'styled-components';
import { MEDIA_QUERY } from '../../../constants/styles';

/**
 *
 * DeleteModal은 삭제 버튼에 연결하는 모달입니다.
 *
 * props로 isModalOpen에 해당하는 boolean이 필요하며, createPortal을 사용하여야합니다.
 *
 * @example
 * ts`
 *  {isModalOpen && createPortal(<DeleteModal isModalOpen={isModalOpen} />, document.body)}
 * `;
 */

type DeleteModalProps = {
  isModalOpen: boolean;
  handleChangeVisible: () => void;
};

const DeletePhotoModal = ({ isModalOpen, handleChangeVisible }: DeleteModalProps) => {
  const deletePhotoModalRef = useRef<HTMLDivElement>(null);

  const handlePhotoDelete = () => {
    // 삭제 로직 추가 예정

    handleChangeVisible();
  };

  useEffect(() => {
    const closeDeleteModal = (e: MouseEvent) => {
      if (isModalOpen && deletePhotoModalRef.current && !deletePhotoModalRef.current.contains(e.target as Node)) {
        handleChangeVisible();
      }
    };

    document.addEventListener('mousedown', closeDeleteModal);

    return () => {
      document.removeEventListener('mousedown', closeDeleteModal);
    };
  }, [isModalOpen, handleChangeVisible]);

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

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return (
    <ModalBackground>
      <Layout ref={deletePhotoModalRef}>
        <DeleteModalWrapper>
          <ModalConfirmText>정말 삭제 하시겠습니까?</ModalConfirmText>
          <DeleteButton onClick={handlePhotoDelete}>삭제</DeleteButton>
          <ModalCloseButton onClick={handleChangeVisible}>취소</ModalCloseButton>
        </DeleteModalWrapper>
      </Layout>
    </ModalBackground>
  );
};

export default DeletePhotoModal;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
  height: calc(var(--vh) * 14.8);
  padding: 3rem 0;

  overflow-y: hidden;

  ${MEDIA_QUERY.sm} {
    height: calc(var(--vh) * 20.8);
  }
`;

const DeleteModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  height: 100%;
`;

const ModalConfirmText = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.typography.body2.fontFamily};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  line-height: ${({ theme }) => theme.typography.body2.lineHeight};

  margin-bottom: 1rem;
`;

const DeleteButton = styled.button`
  width: 32.7rem;
  height: 5rem;
  border-style: none;
  border-radius: 5px;
  box-shadow: 0px 4px 12px 0px rgba(244, 89, 89, 0.5);
  background-color: ${({ theme }) => theme.colors.red};
  margin-bottom: 5px;

  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.typography.subHead2.fontFamily};
  font-size: ${({ theme }) => theme.typography.subHead2.fontSize};
  line-height: ${({ theme }) => theme.typography.subHead2.lineHeight};

  cursor: pointer;
`;

const ModalCloseButton = styled.button`
  all: unset;

  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: underline;

  width: 32.7rem;
  height: 5rem;

  cursor: pointer;
`;
