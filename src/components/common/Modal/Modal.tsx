import type { MouseEventHandler, PropsWithChildren } from 'react';

import { createPortal } from 'react-dom';
import * as S from './Modal.styled';

type Props = {
  handleCloseModal: () => void;
};

const Modal = ({ children, handleCloseModal }: PropsWithChildren<Props>) => {
  const handlePreventCloseModal: MouseEventHandler = (event) => {
    event.stopPropagation();
  };

  return createPortal(
    <S.BackdropLayout onClick={handleCloseModal}>
      <S.ModalContainer onClick={handlePreventCloseModal}>{children}</S.ModalContainer>
    </S.BackdropLayout>,
    document.getElementById('modal-root') as HTMLElement,
  );
};

export default Modal;
