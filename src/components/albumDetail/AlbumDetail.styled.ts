import styled from 'styled-components';
import { MEDIA_QUERY } from '../../constants/styles';

export const Container = styled.section`
  width: 100%;
  height: 30%;

  box-sizing: border-box;
`;

export const FooterLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterContainer = styled.div`
  width: 100%;
  height: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 24px 20px;
  box-sizing: border-box;
`;

export const AlbumDataText = styled.span`
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  font-family: ${({ theme }) => theme.typography.body1.fontFamily};
  color: ${({ theme }) => theme.colors.gray1};

  ${MEDIA_QUERY.sm} {
    font-size: ${({ theme }) => theme.typography.body1.fontSize};
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  box-sizing: border-box;

  & > svg {
    cursor: pointer;
  }
`;
