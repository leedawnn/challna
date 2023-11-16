import styled from 'styled-components';
import { MEDIA_QUERY } from '../../../constants/styles';

export const Menu = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 0;
  padding-top: 60px;

  box-sizing: border-box;
`;

export const MenuList = styled.li`
  width: 100%;

  display: flex;
  justify-content: space-between;

  padding-bottom: 18px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray2};

  cursor: pointer;
`;

export const ListContentText = styled.span`
  font-size: 14px;
  font-family: ${({ theme }) => theme.typography.body1.fontFamily};

  ${MEDIA_QUERY.sm} {
    font-size: ${({ theme }) => theme.typography.body1.fontSize};
  }
`;
