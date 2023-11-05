import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const QRCodeWrapper = styled.div`
  width: 100%;
  height: 221px;
`;

export const ButtonWrapper = styled.button`
  all: unset;

  display: flex;
  justify-content: space-between;
  padding: 11px 12px;

  box-sizing: border-box;

  background-color: ${({ theme }) => theme.colors.lightGray};
  border: 1px solid ${({ theme }) => theme.colors.lightGray3};
`;

export const ButtonText = styled.span`
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-family: ${({ theme }) => theme.typography.body1.fontFamily};
  color: ${({ theme }) => theme.colors.black};
`;
