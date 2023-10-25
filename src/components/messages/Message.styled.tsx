import styled from 'styled-components';

export const MessageContainer = styled.div`
  width: 100%;
  height: 150px;
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

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
  padding: 20px;
  justify-content: left;
  /* align-content: center; */
`;

export const Content = styled.div`
  /* text-align: left; */
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.body3.fontSize};
  font-family: ${({ theme }) => theme.typography.body3.fontFamily};
  max-width: calc(100% - 40px);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const DateTime = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray1};
  margin-right: auto;
`;

export const RightContent = styled.div`
  align-items: right;
  display: flex;
  padding-right: 0.5em;
  padding-bottom: 0.5em;
  margin: auto 0 0 auto;
`;
