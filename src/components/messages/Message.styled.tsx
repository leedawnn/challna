import styled from 'styled-components';

export const MessageContainer = styled.div`
  width: 100%;
  height: 150px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
  padding: 20px;
  justify-content: space-between;
  /* align-content: center; */
`;

export const Content = styled.div`
  font-size: 24px;
  align-content: space-between;
`;
export const DateTime = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray1};
  padding: 20px;
`;
