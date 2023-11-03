import styled from 'styled-components';

export const MessageContainer = styled.div`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  a:link,
  a:visited,
  a:active {
    text-decoration: none;
    color: black;
  }
`;

export const ContentWrapper = styled.section`
  display: flex;
  flex-direction: row;
  margin: 10px;
  padding: 20px;
  justify-content: left;
`;

export const Content = styled.span`
  /* text-align: left; */
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.body3.fontSize};
  font-family: ${({ theme }) => theme.typography.body3.fontFamily};
  /* max-width: calc(100% - 45px); */
  max-width: 277px;
  height: 43px;
  /* width: 277px; */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-bottom: auto;
  row-gap: 20px;
  padding-left: 20px;
`;

export const DateTime = styled.section`
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  color: ${({ theme }) => theme.colors.lightGray4};
  font-weight: ${({ theme }) => theme.fonts.bold};
  margin-right: auto;
  padding-top: 5px;
`;

export const RightContent = styled.section`
  align-items: end;
  display: flex;
  padding-left: 20px;
  padding-bottom: 50px;
  margin: auto 0 0 auto;
`;
