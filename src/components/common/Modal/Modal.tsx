import type { MouseEventHandler, PropsWithChildren } from 'react';

import { createPortal } from 'react-dom';
import * as S from './Modal.styled';

type Props = {
  closeModal: () => void;
};

const Modal = ({ children, closeModal }: PropsWithChildren<Props>) => {
  const handlePreventCloseModal: MouseEventHandler = (event) => {
    event.stopPropagation();
  };

  return createPortal(
    <S.BackdropLayout onClick={closeModal}>
      <S.ModalLayout onClick={handlePreventCloseModal}>{children}</S.ModalLayout>
    </S.BackdropLayout>,
    document.getElementById('modal-root') as HTMLElement,
  );
};

export default Modal;
