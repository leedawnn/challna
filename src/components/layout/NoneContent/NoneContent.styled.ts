import styled from 'styled-components';

export const Layout = styled.section`
  height: 100%;
  min-height: calc(var(--vh, 1vh) * 100 - 168px);

  display: flex;
  flex-direction: column;
  justify-content: center;

  box-sizing: border-box;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const NoneTitle = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};

  margin: 0;
`;

export const NoneSubTitle = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.lightGray5};

  margin: 0;
`;
