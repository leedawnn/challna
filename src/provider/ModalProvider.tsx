import type { PropsWithChildren, ReactNode } from 'react';
import { atom, useAtom } from 'jotai';

import { useCallback } from 'react';
import Modal from '../components/common/Modal/Modal';

export type ModalContentType = {
  isOpen: boolean;
  handleOpenModal: (modalContents: React.ReactNode) => void;
  handleCloseModal: () => void;
};

const modalContentsAtom = atom<ReactNode | null>(null);

const ModalProvider = ({ children }: PropsWithChildren) => {
  const { isOpen, modalContents, handleCloseModal } = useModal();

  return (
    <>
      {children}
      {isOpen && <Modal handleCloseModal={handleCloseModal}>{modalContents}</Modal>}
    </>
  );
};

export default ModalProvider;

export const useModal = () => {
  const [modalContents, setModalContents] = useAtom(modalContentsAtom);

  const isOpen = Boolean(modalContents);

  const handleOpenModal = useCallback((contents: ReactNode) => setModalContents(contents), []);
  const handleCloseModal = useCallback(() => setModalContents(null), []);

  return {
    isOpen,
    modalContents,
    handleOpenModal,
    handleCloseModal,
  };
};
