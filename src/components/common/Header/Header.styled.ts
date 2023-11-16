import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MEDIA_QUERY } from '../../../constants/styles';

export const Layout = styled.header<{ $current: boolean }>`
  position: sticky;
  top: 0;
  z-index: 10;

  width: inherit;

  background-color: #fff;

  box-sizing: border-box;
  margin: 0 auto;

  border-bottom: 1px solid ${({ theme, $current }) => ($current ? theme.colors.lightGray2 : 'transparent')};
`;

export const UserWrapper = styled(Link)`
  width: max-content;
  height: 8rem;

  display: flex;
  align-items: center;
  gap: 8px;

  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;

  padding: 34px 0 20px 24px;
  box-sizing: border-box;
  cursor: pointer;

  & > svg {
    width: 0.9em;
    height: 0.9em;
    padding-bottom: 3px;
  }
`;

export const UserTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.subHead3.fontFamily};
  font-size: 2rem;
  line-height: ${({ theme }) => theme.typography.subHead3.lineHeight};

  margin: 0;
  padding: 2px;
  box-sizing: border-box;

  ${MEDIA_QUERY.sm} {
    font-size: ${({ theme }) => theme.typography.subHead4.fontSize};
  }
`;

export const CommonWrapper = styled.div<{ $current: boolean }>`
  position: relative;

  height: 6rem;

  display: flex;
  justify-content: ${({ $current }) => ($current ? 'flex-start' : 'space-between')};
  align-items: center;

  padding: 1.6rem 2rem;
  box-sizing: border-box;

  & > svg {
    cursor: pointer;
  }
`;

export const EventTitle = styled.h3`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: ${({ theme }) => theme.typography.subHead3.fontSize};
  font-family: ${({ theme }) => theme.typography.subHead3.fontFamily};

  margin: 0;
`;
