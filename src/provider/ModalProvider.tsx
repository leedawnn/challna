import type { PropsWithChildren, ReactNode } from 'react';
import { atom, useAtom } from 'jotai';

import { useCallback } from 'react';
import Modal from '../components/common/Modal/Modal';

const modalContentsAtom = atom<ReactNode | null>(null);

const ModalProvider = ({ children }: PropsWithChildren) => {
  const { isOpen, modalContents, closeModal } = useModal();

  return (
    <>
      {children}
      {isOpen && <Modal closeModal={closeModal}>{modalContents}</Modal>}
    </>
  );
};

export default ModalProvider;

export const useModal = () => {
  const [modalContents, setModalContents] = useAtom(modalContentsAtom);

  const isOpen = Boolean(modalContents);

  const openModal = useCallback((contents: ReactNode) => setModalContents(contents), []);
  const closeModal = useCallback(() => setModalContents(null), []);

  return {
    isOpen,
    modalContents,
    openModal,
    closeModal,
  };
};
