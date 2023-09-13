import { useEffect } from 'react';
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

const DeleteModal = ({ isModalOpen }: any) => {
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
    <Layout>
      <DeleteModalWrapper>
        <ModalConfirmText>정말 삭제 하시겠습니까?</ModalConfirmText>
        <DeleteButton>삭제</DeleteButton>
        <ModalCloseButton>취소</ModalCloseButton>
      </DeleteModalWrapper>
    </Layout>
  );
};

export default DeleteModal;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
  height: calc(var(--vh) * 14.8);
  padding: 3rem 0;

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
  color: ${(props) => props.theme.colors.black};
  font-family: ${(props) => props.theme.typography.body2.fontFamily};
  font-size: ${(props) => props.theme.typography.body2.fontSize};
  line-height: ${(props) => props.theme.typography.body2.lineHeight};

  margin-bottom: 1rem;
`;

const DeleteButton = styled.button`
  width: 32.7rem;
  height: 5rem;
  border-style: none;
  border-radius: 5px;
  box-shadow: 0px 4px 12px 0px rgba(244, 89, 89, 0.5);
  background-color: ${(props) => props.theme.colors.red};

  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.typography.subHead2.fontFamily};
  font-size: ${(props) => props.theme.typography.subHead2.fontSize};
  line-height: ${(props) => props.theme.typography.subHead2.lineHeight};

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
