import styled from 'styled-components';
import { MEDIA_QUERY } from '../../constants/styles';

export const Container = styled.section`
  width: 100%;

  box-sizing: border-box;
`;

export const ContentContainer = styled.div`
  max-width: 576px;
  width: inherit;

  display: flex;
  flex-direction: column;

  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  z-index: 20;

  background-color: ${({ theme }) => theme.colors.white};
`;

export const ContentWrapper = styled.div`
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

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  box-sizing: border-box;

  & > svg {
    cursor: pointer;
  }
`;

export const MessageWrapper = styled.div`
  padding: 0 27px 30px 27px;

  box-sizing: border-box;
`;

export const MessageText = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fontWeight.regular};
  font-size: 12px;
`;
