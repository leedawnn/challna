import styled from 'styled-components';

// 페이지 최상위 컨테이너
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
// Middle

export const MessageContentsContainer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray2};
  max-width: 375px;
  max-height: 130px;
  width: inherit;
  padding-bottom: 20px;
  flex-direction: column;

  position: fixed;
  left: 50%;
  bottom: 50px;
  transform: translateX(-50%);
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const MessageContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 50px;
  padding: 24px 20px;
  box-sizing: border-box;
  /* overflow: auto; */
`;

export const ContentText = styled.span`
  /* margin-top: 20px; */
  padding-bottom: 70px;
  margin-bottom: 100px;
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  font-family: ${({ theme }) => theme.typography.body1.fontFamily};
  color: ${({ theme }) => theme.colors.black};
`;

//  Footer
export const MessageFooterContainer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray2};
  max-width: 576px;
  width: inherit;
  height: 67px;
  display: flex;
  flex-direction: column;

  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  z-index: 20;

  background-color: ${({ theme }) => theme.colors.white};
`;

export const MessageFooter = styled.div`
  width: 100%;
  height: 67px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 24px 20px;
  box-sizing: border-box;
`;

export const FooterText = styled.span`
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  font-family: ${({ theme }) => theme.typography.body1.fontFamily};
  color: ${({ theme }) => theme.colors.lightGray4};
`;
