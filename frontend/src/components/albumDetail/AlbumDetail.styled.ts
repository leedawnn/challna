import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 30%;

  box-sizing: border-box;
`;

export const FooterContainer = styled.div`
  width: 100%;
  height: 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 24px 20px;
  box-sizing: border-box;
`;

export const AlbumDataText = styled.span`
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-family: ${({ theme }) => theme.typography.body1.fontFamily};
  color: ${({ theme }) => theme.colors.gray1};
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  padding-right: 24px;
  box-sizing: border-box;
`;
