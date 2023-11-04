import styled from 'styled-components';

export const MessageContainer = styled.main`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  a:link,
  a:visited,
  a:active {
    text-decoration: none;
    color: black;
  }
  gap: 39px;
`;

export const ContentWrapper = styled.section`
  display: flex;
  flex-direction: row;
  width: 328px;
  height: 43px;
  margin-right: 23px;
  margin-left: 23px;
  padding: 10px;
  justify-content: left;
`;

export const IconContent = styled.article`
  padding-top: 5px;
`;

export const Content = styled.section`
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.body3.fontSize};
  font-family: ${({ theme }) => theme.typography.body3.fontFamily};
  max-width: 272px;
  height: 43px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-bottom: auto;
  margin-bottom: 10px;
`;

export const DateTime = styled.article`
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  color: ${({ theme }) => theme.colors.lightGray4};
  font-weight: ${({ theme }) => theme.fonts.bold};
  margin-right: auto;
  padding-top: 5px;
`;

export const RightContent = styled.article`
  align-items: end;
  display: flex;
  padding-left: 20px;
  padding-bottom: 50px;
  margin: auto 0 0 auto;
`;
