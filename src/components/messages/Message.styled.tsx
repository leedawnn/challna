import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Layout = styled.section`
  width: 100%;

  padding: 0 24px;
  box-sizing: border-box;
`;

export const Container = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 40px;

  padding: 0;
`;

export const MessageListWrapper = styled.li`
  width: 100%;

  list-style: none;
`;

export const MessageDetailLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  text-decoration: none;
`;

export const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  width: 80%;
`;

export const MessageText = styled.span`
  font-size: ${({ theme }) => theme.typography.body3.fontSize};
  font-family: ${({ theme }) => theme.typography.body3.fontFamily};
  color: ${({ theme }) => theme.colors.black};
  white-space: nowrap;
  text-overflow: ellipsis;

  overflow: hidden;
`;

export const MessageDateText = styled.span`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.lightGray4};
`;
