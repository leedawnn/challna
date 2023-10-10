import styled from 'styled-components';

export const BackdropLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 25;

  min-width: 100vh;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  position: fixed;
  left: 50%;
  bottom: 0;
  z-index: 15;
  transform: translate(-50%, 0);

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); // 임의 box-shadow

  max-width: 57.6rem;
  width: 100%;

  overflow-y: hidden;
`;

// 더보기 모달 영역
export const MoreDeleteWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  padding: 0 3rem;
  margin: 4rem 0;
`;

export const MoreDeleteText = styled.span`
  color: ${({ theme }) => theme.colors.red};
  margin-left: 1.2rem;
`;

// 삭제 및 취소 확인 모달 영역
export const DeleteConfirmWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DeleteConfirmTitle = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.typography.body2.fontFamily};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  line-height: ${({ theme }) => theme.typography.body2.lineHeight};

  padding: 3rem 0;
`;

export const DeleteConfirmButton = styled.button`
  all: unset;

  width: 32.7rem;
  height: 5rem;

  text-align: center;

  border-style: none;
  border-radius: 5px;
  box-shadow: 0px 4px 12px 0px rgba(244, 89, 89, 0.5);
  background-color: ${({ theme }) => theme.colors.red};

  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.typography.subHead2.fontFamily};
  font-size: ${({ theme }) => theme.typography.subHead2.fontSize};
  line-height: ${({ theme }) => theme.typography.subHead2.lineHeight};

  cursor: pointer;
`;

export const DeleteCancelButton = styled.button`
  all: unset;

  width: 32.7rem;
  height: 5rem;

  text-align: center;
  text-decoration: underline;

  margin-bottom: 3rem;

  cursor: pointer;
`;
