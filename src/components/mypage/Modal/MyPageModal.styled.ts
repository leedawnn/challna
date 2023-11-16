import styled from 'styled-components';

export const MyPageModalContainer = styled.div`
  width: 261px;
  height: 430px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;

  border-radius: 5px;
  padding: 18px 20px 30px 20px;
  box-sizing: border-box;
  background-color: #ffffff;
`;

export const MyPageModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 65px;

  width: 100%;

  box-sizing: border-box;
`;

export const MyPageModalTitle = styled.p`
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-family: ${({ theme }) => theme.typography.body1.fontFamily};
`;
