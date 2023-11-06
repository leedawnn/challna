import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;

  margin-top: 30px;
`;

export const QRCodeWrapper = styled.div`
  width: 100%;
  height: 221px;
`;

export const ButtonWrapper = styled.button`
  all: unset;

  width: 100%;
  height: 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 11px 12px;

  background-color: ${({ theme }) => theme.colors.lightGray};
  border: 1px solid ${({ theme }) => theme.colors.lightGray3};
  border-radius: 5px;

  cursor: pointer;
  box-sizing: border-box;
`;

export const ButtonText = styled.span`
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-family: ${({ theme }) => theme.typography.body1.fontFamily};
  color: ${({ theme }) => theme.colors.black};
`;
