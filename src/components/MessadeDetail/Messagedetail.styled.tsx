import styled from 'styled-components';

// 페이지 최상위 컨테이너
export const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
// Middle

export const MessageContentsContainer = styled.section`
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

export const MessageContent = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 50px;
  padding: 24px 20px;
  box-sizing: border-box;
`;

export const ContentText = styled.article`
  padding-bottom: 70px;
  margin-bottom: 100px;
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  font-family: ${({ theme }) => theme.typography.body1.fontFamily};
  color: ${({ theme }) => theme.colors.black};
`;

//  Footer
export const MessageFooterContainer = styled.footer`
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

export const MessageFooter = styled.section`
  width: 100%;
  height: 67px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 24px 20px;
  box-sizing: border-box;
`;

export const FooterText = styled.p`
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  font-family: ${({ theme }) => theme.typography.body1.fontFamily};
  color: ${({ theme }) => theme.colors.lightGray4};
`;
