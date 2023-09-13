import { useEffect } from 'react';
import styled from 'styled-components';
import deleteIcon from '../../../assets/delete.svg';

const MessageMenuModal = ({ isModalOpen }: any) => {
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
        <img src={deleteIcon} alt="삭제 버튼 아이콘" />
        <DeleteText>삭제</DeleteText>
      </DeleteModalWrapper>
    </Layout>
  );
};

export default MessageMenuModal;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  position: absolute;
  z-index: 1;

  left: 0;
  bottom: 0;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); // 임의 box-shadow

  width: 100%;
  height: calc(var(--vh) * 12.3);
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
